import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ListaTema.css'
import { getAll } from '../../../services/Service'
import { Tema } from '../../../models/Tema'
import { useSelector } from 'react-redux'
import { TokenState } from '../../../store/tokens/tokensReducer'
import { toast } from 'react-toastify'

function ListaTema() {
    
    const [temas, setTemas] = useState<Tema[]>([])
    
    const history = useNavigate()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if(token === '') {
            toast.error('Você precisa estar logado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            })
           history('/login') 
        }
    }, [token])

    async function getAllTemas() {
        await getAll('/temas', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getAllTemas()
    }, [temas.length])
        
  
    return (

    <>
        {temas.map(tema => (
             <Box m={2} >
             <Card variant='outlined'>
                 <CardContent>
                     <Typography color={'textSecondary'} gutterBottom>
                         Tema
                     </Typography>
                     <Typography variant='h5' component={'h2'}>
                         {tema.descricao}
                     </Typography>
                 </CardContent>
                 <CardActions>
                     <Box display={'flex'} justifyContent={'center'} mb={1.5}>
                         <Link to={`/formularioTema/${tema.id}`} className='text-decorator-none'>
                             <Box mx={1}>
                                 <Button variant='contained' className='marginLeft' size='small' color='primary'>
                                     Editar
                                 </Button>
                             </Box>
                         </Link>
                         <Link to={`/deletarTema/${tema.id}`} className='text-decorator-none'>
                             <Box mx={1}>
                                 <Button variant='contained' size='small' color='secondary'>
                                     Deletar
                                 </Button>
                             </Box>
                         </Link>
                     </Box>
                 </CardActions>
             </Card>
         </Box>            
        ))}       
    </>    
  )
}

export default ListaTema
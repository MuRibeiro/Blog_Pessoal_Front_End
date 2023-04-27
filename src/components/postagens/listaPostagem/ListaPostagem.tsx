import React, { useEffect, useState } from 'react'
import './ListaPostagem.css'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Postagem } from '../../../models/Postagem';
import { getAll } from '../../../services/Service'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {

    const [postagens, setPostagens] = useState<Postagem[]>([])
    
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

    async function getAllPostagens() {
        await getAll('/postagens', setPostagens, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getAllPostagens()
    }, [postagens.length])
    
  return (
    <>
        {postagens.map(Postagem => (
            <Box m={2}>
            <Card variant='outlined'>
                <CardContent>
                    <Typography color={'textSecondary'} gutterBottom>
                        Postagens
                    </Typography>
                    <Typography variant='h5' component={'h2'}>
                        {Postagem.titulo}
                    </Typography>
                    <Typography variant='body2' component={'p'}>
                        {Postagem.texto}
                    </Typography>
                    <Typography variant='body2' component={'p'}>
                        {Postagem.tema?.descricao}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box display={'flex'} justifyContent={'center'} mb={1.5}>
                        <Link to={`/formularioPostagem/${Postagem.id}`} className='text-decorator-none'>
                            <Box mx={1}>
                                <Button variant='contained' className='marginLeft' size='small' color='primary'>
                                    Editar
                                </Button>
                            </Box>
                        </Link>
                        <Link to={`/deletarPostagem/${Postagem.id}`} className='text-decorator-none'>
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

export default ListaPostagem
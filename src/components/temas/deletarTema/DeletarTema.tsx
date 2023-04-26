import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import { Tema } from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarTema() {

    const history = useNavigate();
    
    const { id } = useParams<{id: string}>();
    
    const [tema, setTema] = useState<Tema>()
 
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    
    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

    function sim() {
        history('/temas')
        deleteId(`/temas/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        alert('Tema deletado com sucesso')
    }
        
    function nao() {
        history('/temas')
    }

  return (
    <>
        <Box m={2}>
            <Card variant='outlined'>
                <CardContent>
                    <Box justifyContent={'center'}>
                        <Typography color={'textSecondary'} gutterBottom>
                            Deseja deletar o tema:
                        </Typography>
                        <Typography color={'textSecondary'}>
                            {tema?.descricao}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display={'flex'} justifyContent={'start'} ml={'1.0'} mb={2}>
                        <Box mx={2}>
                            <Button onClick={sim} variant='contained' className='marginLeft' size='large' color='primary'>
                                Sim
                            </Button>
                        </Box>
                        <Box mx={2}>
                            <Button onClick={nao} variant='contained' size='large' color='secondary'>
                                Não
                            </Button>
                        </Box>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    </>
  )
}

export default DeletarTema
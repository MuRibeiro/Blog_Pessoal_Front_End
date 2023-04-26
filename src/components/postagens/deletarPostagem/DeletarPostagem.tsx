import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Postagem } from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function DeletarPostagem() {

    const history = useNavigate();
    
    const { id } = useParams<{id: string}>();
    
    const [postagem, setPostagem] = useState<Postagem>()
 
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
        buscaId(`/postagens/${id}`, setPostagem, {
            headers: {
              'Authorization': token
            }
          })
        }

    function sim() {
        history('/postagem')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization': token
            }
        })
        alert('Postagem deletada com sucesso')
    }
        
    function nao() {
        history('/postagem')
    }
    
  return (
    <>
        <Box m={2}>
            <Card variant='outlined'>
                <CardContent>
                    <Box justifyContent={'center'}>
                        <Typography color={'textSecondary'} gutterBottom>
                            Deseja deletar a postagem:
                        </Typography>
                        <Typography color={'textSecondary'}>
                            {postagem?.titulo}
                        </Typography>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display={'flex'} justifyContent={'start'} ml={1.0} mb={2}>
                        <Box mx={2}>
                            <Button onClick={sim} variant='contained' className='marginLeft' size='large' color='primary'>
                                Sim
                            </Button>
                        </Box>
                        <Box>
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

export default DeletarPostagem
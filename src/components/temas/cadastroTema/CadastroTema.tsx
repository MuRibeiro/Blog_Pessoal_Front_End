import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {Link, useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import { buscaId, post, put } from '../../../services/Service';
import { Tema } from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Box, Grid } from '@mui/material';


function CadastroTema() {

    const history = useNavigate();
    
    const { id } = useParams<{id: string}>();
    
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    )

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    useEffect(() => {
        if (token === "") {
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

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
    
            if(id !== undefined){
                try {
                  await put('/temas', tema, setTema, {
                    headers: {
                      Authorization: token,
                    },
                  });
                  alert('Tema atualizado com sucesso');
                  history('/temas')
                } catch (error) {
                  alert('Deu ruim');
                }
              } else {
                try {
                  await post('/temas', tema, setTema, {
                    headers: {
                      Authorization: token,
                    },
                  });
                  alert('Tema cadastrado com sucesso');
                  history('/temas')
                } catch (error) {
                  alert('Deu ruim');
                }
              }
            }
  
    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h4" color="textSecondary" component="h1" align="center">
                    {tema.id !== 0 ? 'Editar tema' : 'Cadastar tema'}
                </Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" size='small' fullWidth required/>
                
                <Button style={{width: 100, marginLeft: 100}} type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
                
                <Button style={{width: 100, marginLeft: 100}}  variant="contained" color="secondary">
                    Cancelar
              </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;
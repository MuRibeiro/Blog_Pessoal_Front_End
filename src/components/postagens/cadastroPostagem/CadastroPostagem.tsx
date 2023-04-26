import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import './CadastroPostagem.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Tema } from '../../../models/Tema';
import { Postagem } from '../../../models/Postagem';
import { buscaId, getAll, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroPostagem() {

    const history = useNavigate();
   
    const { id } = useParams<{id: string}>();
    
    const [tema, setTema] = useState<Tema[]>([])
   
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])
    
    const [temas, setTemas] = useState<Tema>({
        id: 0,
        descricao: ''
    })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        data: '',
        tema: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: temas
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await getAll("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: temas
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back()

    }

    function back() {
        history('/postagem')
    }

  return (
    <Container maxWidth='sm' className='topo'>
        <form onSubmit={onSubmit}>
            <Typography variant='h4' color={'textSecondary'} component={'h1'} align='center' >
                Criar Postagem
            </Typography>
            <TextField value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id='titulo' label='Titulo' variant='outlined' name='titulo' margin='dense' required fullWidth >
                Titulo
            </TextField>
            <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id='texto' label='Texto' variant='outlined' name='texto' margin='dense' required fullWidth>
                Texto
            </TextField>

            <FormControl>
                <InputLabel id='demo-simple-select-helper-label'>Tema</InputLabel>
                <Select labelId='demo-simple-select-helper-label' 
                    id='demo-simple-select-helper-label'
                    onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                        headers: {
                            'Authorization': token
                        }
                    })}>
                {    
                    tema.map(temas => (
                        <MenuItem value={temas.id}>{temas.descricao}</MenuItem>
                    ))
                }
                </Select>
                <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                <Button type='submit' variant='contained' color='primary' style={{marginTop: 20, width: 90}}>
                    Postar
                </Button>
            </FormControl>
        </form>
    </Container>
  )
}

export default CadastroPostagem
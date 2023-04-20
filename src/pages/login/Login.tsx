import './Login.css'
import { Grid } from '@material-ui/core'
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { login } from '../../services/Service'
import UserLogin from '../../models/UserLogin';
import User from '../../models/User';


function Login() {

    const history = useNavigate();

    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        }
    )
    
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(token !== ''){
           history('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try{
            await login('/usuarios/logar', userLogin, setToken)
            alert('Usuário logado com sucesso!');

        }catch(error){
            alert('Usuário ou senha inválidos');
        } 
    }
  return (
    <>
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography
                          variant='h4'
                          gutterBottom
                          color={'textPrimary'}
                          align='center'
                          className='texto'>Entrar</Typography>

                        <TextField
                          value={userLogin.usuario}
                          onChange={(e:ChangeEvent<HTMLInputElement>) =>
                          updatedModel(e)}
                          id='usuario'
                          label='Usuário'
                          variant='outlined'
                          name='usuario'
                          margin='normal'
                          fullWidth />
                        <TextField
                          value={userLogin.senha}
                          onChange={(e:ChangeEvent<HTMLInputElement>) =>
                          updatedModel(e)}
                          id='senha'
                          label='Senha'
                          variant='outlined' 
                          name='senha'
                          margin='normal'
                          type='password'
                          fullWidth />
                        <Box marginTop={2} textAlign={'center'}>
                            
                                <Button type='submit' variant='contained' color='primary' >Logar</Button> 
                            
                        </Box>
                    </form>
                    <Box display={'flex'} justifyContent={'center'} marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle2' gutterBottom align='center'>Não tem uma conta?</Typography>

                        </Box>
                        <Link to={'/cadastroUsuario'}>
                            <Typography variant='subtitle2' gutterBottom align='center' className='texto'>Cadastre-se aqui</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagemLogin'>
            </Grid>
        </Grid>       
    </>
  )
}

export default Login
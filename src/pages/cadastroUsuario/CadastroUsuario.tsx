import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './CadastroUsuario.css'
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';

function CadastroUsuario() {

    const history = useNavigate();
    
    //useState responsavel por confirmar que a senhas foram digitadas iguais 
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    
    //useState responsavel por armazenar os dados escritos pelo usuário e enviar para a api
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        }
    )

    //useState responsavel por receber o JSON da api com os dados cadastrados
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        }
    )

    /**useState reponsavel por verificar os dados que receber da api, se o id é diferente de 0, pois assim tem 
    dados armazenados e o cadastro foi realizado com sucesso e vai para a pagina de login!*/
    useEffect(() => {
        if(userResult.id !== 0) {
            history('/login')
        }
    }, [userResult])

    /**função responsavel por colher os dados digitados no campo confirmação de senha e armazena no useState
     da confirmaçõa de senha  */ 
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    /**função responsavel por atualizar todos os dados da model. 
     * pega todos os respectivos campos e dados que o usuario digitou, monta um objeto para envio 
     * e guarda no useState user.
     * Então esses dados são enviados para a api
     */
    function updatedModel(e: ChangeEvent<HTMLInputElement>){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    /*função responsavel por fazer o envio do formulario. E onde acontece a verificação das senhas digitadas!
    Caso confere as senhas, aciona o cadastroUsuario no service já enviando os elementos na rota definida, 
    os dados que o usuario digitou e o retorno que é armazenado no setUserResult*/
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault() // previne o comportamento padrao do botão, não deixa a tela atualizar
        console.log(user)
        console.log(confirmarSenha)
        if(confirmarSenha == user.senha){
            try {
                await cadastroUsuario('/usuarios/cadastrar', user, setUserResult)
                alert('Usuário cadastrado com sucesso!')
            } catch (error) {
                alert ('Por favor, verifique os campos')
            }
        }else{
            alert('As senhas não coincidem')
            setConfirmarSenha('')
            setUser(
                {
                    ...user,
                    senha: ''
                }
            )
        }
    }

  return (
    <>
        <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid xs={6} paddingTop={2}>
                <Typography variant='h4' gutterBottom color={'textPrimary'} align='center'>Cadastrar novo usuário</Typography>
                <Box paddingX={8}>
                    <form onSubmit={onSubmit}>

                        <TextField
                          value={user.nome}
                          onChange={(e:
                          ChangeEvent<HTMLInputElement>) =>
                          updatedModel(e)}
                          id='nome'
                          label='Nome'
                          variant='outlined'
                          name='nome'
                          margin='normal'
                          fullWidth
                          size='small'>Nome
                          Completo</TextField>

                        <TextField
                          value={user.usuario}
                          onChange={(e:
                          ChangeEvent<HTMLInputElement>) =>
                          updatedModel(e)}
                          id='usuario'
                          label='Usuário'
                          variant='outlined'
                          name='usuario'
                          margin='normal'
                          fullWidth
                          size='small'>Usuário</TextField>

                        <TextField
                          value={user.senha}
                          onChange={(e:
                          ChangeEvent<HTMLInputElement>) =>
                          updatedModel(e)}
                          id='senha'
                          label='Senha'
                          variant='outlined'
                          name='senha'
                          margin='normal'
                          fullWidth
                          size='small'
                          type='password'>Senha</TextField>

                        <TextField
                          value={confirmarSenha}
                          onChange={(e:
                          ChangeEvent<HTMLInputElement>) =>
                          confirmarSenhaHandle(e)}
                          label='Confirme
                          sua
                          senha'
                          variant='outlined'
                          margin='normal'
                          fullWidth
                          size='small'
                          type='password'>Confirme
                          sua
                          senha</TextField>
                        
                        <Box marginTop={2} textAlign={'center'}>
                            <Link to={'/login'}>
                                    <Button variant='contained' color='secondary' className='botaoCancelar'>Cancelar</Button>
                            </Link>
                                <Button type='submit' variant='contained'>Cadastrar</Button>
                        </Box>
                    </form>
                </Box>            
            </Grid>
            <Grid xs={4} className='fotoCadastroUsuario'>

            </Grid>
        </Grid>
    </>
  )
}

export default CadastroUsuario
import axios from "axios";
import CadastroUsuario from '../pages/cadastroUsuario/CadastroUsuario';

export const api = axios.create({
    baseURL: 'https://blogpessoal-m3t9.onrender.com'
})

export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}
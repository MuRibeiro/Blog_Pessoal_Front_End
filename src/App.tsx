import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/estatics/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/estatics/footer/Footer';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTemas/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <BrowserRouter>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cadastroUsuario' element={<CadastroUsuario />} />
            <Route path='/temas' element={<ListaTema />} />
            <Route path='/postagem' element={<ListaPostagem />} />
            <Route path='/formularioPostagem' element={<CadastroPostagem />} />
            <Route path='/formularioPostagem/:id' element={<CadastroPostagem />} />
            <Route path='/formularioTema' element={<CadastroTema />} />
            <Route path='/formularioTema/:id' element={<CadastroTema />} />
            <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />
            <Route path='/deletarTema/:id' element={<DeletarTema />} />
          </Routes>
          </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  )
}

export default App

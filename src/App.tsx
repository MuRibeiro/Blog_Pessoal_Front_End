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

function App() {
  return (
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
          </Routes>
          </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/estatics/navbar/Navbar';
import Home from './pages/home/Home';
import { Grid } from '@material-ui/core';
import Footer from './components/estatics/footer/Footer';

function App() {
  return (
    <>     
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App

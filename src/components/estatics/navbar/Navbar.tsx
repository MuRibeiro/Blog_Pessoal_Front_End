import "./Navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Navbar() {

    const [token, setToken] = useLocalStorage('token')
    const history = useNavigate()

    function goLogout() {
        setToken('')
        alert('Usuário deslogado!')
        history('/login')
    }
    return (
        <>
            <AppBar position="static" className="barra">
                <Toolbar variant="dense">
                <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex">
                        <Link to={'/home'}>
                            <Box mx={1} className="cursor" >
                                <Typography variant="subtitle1" color="inherit">
                                Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to={'/postagem'}>
                            <Box mx={1} className="cursor">
                                <Typography variant="subtitle1" color="inherit">
                                Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to={'/temas'}>
                            <Box mx={1} className="cursor">
                                <Typography variant="subtitle1" color="inherit">
                                Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to={'/formularioTema'}>
                            <Box mx={1} className="cursor">
                                <Typography variant="subtitle1" color="inherit">
                                Cadastrar Tema
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>

                    <Box> 
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="subtitle1" color="inherit">
                                Logout 
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;

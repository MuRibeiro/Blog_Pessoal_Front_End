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
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#1d3557" }}>
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
                        
                            <Box mx={1} className="cursor">
                                <Typography variant="subtitle1" color="inherit">
                                Cadastrar Tema
                                </Typography>
                            </Box>
                        
                    </Box>

                    <Box>
                        <Link to='/login' id="textDecorator"> 
                            <Box mx={1} className="cursor">
                                <Typography variant="subtitle1" color="inherit">
                                    Logout 
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;

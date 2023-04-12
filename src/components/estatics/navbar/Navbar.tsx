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

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#1d3557" }}>
                <Toolbar variant="dense">
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                <MenuIcon />
                </IconButton>    
                <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="subtitle1" color="inherit">
                            Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="subtitle1" color="inherit">
                            Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="subtitle1" color="inherit">
                            Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="subtitle1" color="inherit">
                            Cadastrar Tema
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
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

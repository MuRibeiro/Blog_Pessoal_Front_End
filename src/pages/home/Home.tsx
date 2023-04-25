import React, { useEffect } from "react";
import './Home.css';
import { Button, Grid, Paper } from "@material-ui/core";
import { Box } from "@mui/material"
import Typography from '@mui/material/Typography';
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

function Home() {

    const history = useNavigate()
    const [token, setToken] = useLocalStorage('token')

    useEffect(() =>{
        if(token === '') {
            alert('Você precisa estar logado')
            history('/login')
        }
    })
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa" >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={12}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">
                            Seja bem vinde!
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">
                            O que você está pensando? Escreva aqui!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />    
                        </Box>
                        <Button variant="outlined" className="botaoModal"> Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://ik.imagekit.io/6kg1q0s1r/Writer_s_block-amico.png?updatedAt=1681323288251" alt="Imagem Capa" className="fotoHome" />
                </Grid>
                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
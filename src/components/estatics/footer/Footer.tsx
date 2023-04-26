import { Grid } from '@material-ui/core'
import './Footer.css'
import { Box } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
)

  var footerComponent

  if (token !== '') {
    footerComponent = <Grid container direction='row' justifyContent='center' alignItems='center'>
    <Grid alignItems='center' item xs={12}>
        <Box className='boxPrincipal'>
          <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h5" align="center" gutterBottom className='descricao'> Siga-nos nas redes sociais</Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <a href="http://www.facebook.com" target='blank'>
              <FacebookIcon className='icones'/>
            </a>
            <a href="http://www.instagram.com" target='blank'>
              <InstagramIcon className='icones'/>
            </a>
            <a href="http://www.linkedin.com" target='blank'>
              <LinkedInIcon className='icones'/>
            </a>
          </Box>
        </Box>
        <Box className='boxPrincipal'>
            <Box paddingTop={1}>
                <Typography variant="subtitle2" align='center' gutterBottom className='descricao'> 2023 Copyright</Typography>
            </Box>
            <Box>
              <a target='blank' href="https://www.linkedin.com/in/muriloc-ribeiro/" >
                <Typography variant='subtitle2' gutterBottom align="center" className='descricao'> LinkedIn Desenvolvedor Murilo </Typography>
              </a>
            </Box>
        </Box>
    </Grid>  
    </Grid>
    
  }
  return (
      <>
        {footerComponent}
      </>    
  )
}

export default Footer
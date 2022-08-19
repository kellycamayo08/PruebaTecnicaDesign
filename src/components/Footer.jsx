import React from 'react';
import { Grid } from '@mui/material';
import '../styles/footer.css'
import line from '../images/linhas.svg'
import mcontigo from '../images/White.svg'

const Footer = () => {
    return (
        <Grid container className='container__footer'
        display='flex'
        justifyContent='center'
        >
            <Grid 
            container
            columns={{ xs: 4, sm: 8, md: 12 }}
            xs={12} md={12}
            display='flex'
            justifyContent='center'
            justifyItems='center'
            padding='20px'
            
             
            >
                <Grid className='container__mcontigo'
                display='flex'
                alignItems='center'
                margin='20px 0'
                >
                    <img className='mcontigo' src={mcontigo} alt="" />
                </Grid>
                <Grid 
                >
                    <p className='text'>La Mente es Maravillosa is a property of Grupo MContigo</p>
                    <p className='text'>© 2012 – 2020. All rights reserved.</p>
                    <p className='text'>Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
                </Grid>
            </Grid>
            <Grid  
            display='flex'
            justifyContent='center'
            >
                <img className='line' src={line} alt="" />
            </Grid>
            <Grid container
            columns={{ xs: 4, sm: 8, md: 12 }}
            xs={12} md={12}
            display='flex'
            justifyContent='center'
            >
                <p className='text__footer'>Politica de Cookies</p>
                <p className='text__footer'>Politica de Privacidad</p>
                <p className='text__footer'>Términos y condiciones de uso</p>
                <p className='text__footer'>Cláusula Informativa de Consentimiento</p>
            </Grid>
        </Grid>
    );
};

export default Footer;
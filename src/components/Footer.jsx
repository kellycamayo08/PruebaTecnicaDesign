import React from 'react';
import { Grid } from '@mui/material';
import '../styles/footer.css'
import line from '../images/linhas.svg'
import mcontigo from '../images/White.svg'

const Footer = () => {
    return (
        <div className='container__footer'>
            <Grid 
            display='flex'
            flexDirection='row'
            justifyContent='center'
            justifyItems='center'
            padding='20px'
            item xs={12}
            columns={{ xs: 4, sm: 8, md: 12 }}
            >
                <Grid
                columns={{ xs: 4, sm: 8, md: 12 }}
                item xs={12}
                display='flex'
                alignItems='center'
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
            <Grid
            display='flex'
            justifyContent='center'
            >
                <p className='text__footer'>Politica de Cookies</p>
                <p className='text__footer'>Politica de Privacidad</p>
                <p className='text__footer'>Términos y condiciones de uso</p>
                <p className='text__footer'>Cláusula Informativa de Consentimiento</p>
            </Grid>
        </div>
    );
};

export default Footer;
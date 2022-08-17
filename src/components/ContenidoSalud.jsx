import React from 'react';
import { Grid } from '@mui/material';
import '../styles/contenidoS.css'
import imagen1 from '../images/imagen1.jpg'
import mejorconsalud from '../images/Mejorconsalud.svg'

const ContenidoSalud = () => {


    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={10} md={12}
                    display='flex'
                    justifyContent='center'
                    justifyItems='center'
                    margin='40px'
                >
                    <img className='image-mejorconsalud' src={mejorconsalud} alt="" />
                </Grid>

                <Grid container
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    xs={12} md={12}
                    display='flex'
                    justifyContent='center'
                    padding='0px !important'
                >

                    <Grid className='container-card'>
                        <div className='container-img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container-contents'>
                            <h3 className='title'>Nutrición</h3>
                            <p className='text'>Colapso mental: cuando siento el peso del mundo sobre mí</p>
                        </div>
                    </Grid>
                    <Grid className='container-card'>
                        <div className='container-img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container-contents'>
                            <h3 className='title'>Nutrición</h3>
                            <p className='text'>Colapso mental: cuando siento el peso del mundo sobre mí</p>
                        </div>
                    </Grid>
                    <Grid className='container-card'>
                        <div className='container-img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container-contents'>
                            <h3 className='title'>Nutrición</h3>
                            <p className='text'>Colapso mental: cuando siento el peso del mundo sobre mí</p>
                        </div>
                    </Grid>
                    <Grid className='container-card'>
                        <div className='container-img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container-contents'>
                            <h3 className='title'>Nutrición</h3>
                            <p className='text'>Colapso mental: cuando siento el peso del mundo sobre mí</p>
                        </div>
                    </Grid>

                </Grid>
                <Grid item xs={12}
                container
                columns={{ xs: 4, sm: 8, md: 12 }}
                display='flex'
                justifyContent='center'
                padding='0px !important'
                >
                    <Grid className='container-card2'>
                        <div className='container-img2'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container-contents2'>
                            <h3 className='title'>Nutrición</h3>
                            <p className='text'>Colapso mental: cuando siento el peso del mundo sobre mí</p>
                        </div>
                    </Grid>
                    <Grid className='container-card2'>
                        <div className='container-img2'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container-contents2'>
                            <h3 className='title'>Nutrición</h3>
                            <p className='text'>Colapso mental: cuando siento el peso del mundo sobre mí</p>
                        </div>
                    </Grid>
                </Grid>
                

            </Grid>
           
        </>
    );
};

export default ContenidoSalud;
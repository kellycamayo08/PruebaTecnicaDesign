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
                    <img className='image__mejorconsalud' src={mejorconsalud} alt="" />
                </Grid>

                <Grid container
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    xs={12} md={12}
                    display='flex'
                    justifyContent='center'
                    padding='0px !important'
                >

                    <Grid className='container__card'>
                        <div className='container__img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <h4 className='text__card'>Colapso mental: cuando siento el peso del mundo sobre mí</h4>
                        </div>
                    </Grid>
                    <Grid className='container__card'>
                        <div className='container__img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <h4 className='text__card'>Colapso mental: cuando siento el peso del mundo sobre mí</h4>
                        </div>
                    </Grid>
                    <Grid className='container__card'>
                        <div className='container__img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <h4 className='text__card'>Colapso mental: cuando siento el peso del mundo sobre mí</h4>
                        </div>
                    </Grid>
                    <Grid className='container__card'>
                        <div className='container__img'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <h4 className='text__card'>Colapso mental: cuando siento el peso del mundo sobre mí</h4>
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
                    <Grid className='container__card2'>
                        <div className='container__img2'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents2'>
                            <h3 className='text__card title__card2'>Colapso mental: cuando siento el peso del mundo sobre mí</h3>
                            <p className='paragraph__card'>A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</p>
                        </div>
                    </Grid>
                    <Grid className='container__card2'>
                        <div className='container__img2'>
                            <img className='img' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents2'>
                            <h3 className='text__card title__card2'>Colapso mental: cuando siento el peso del mundo sobre mí</h3>
                            <p className='paragraph__card'>A veces nos sentimos como Atlas, aquel titán al que Zeus castigó y le obligó a llevar el peso de…</p>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ContenidoSalud;
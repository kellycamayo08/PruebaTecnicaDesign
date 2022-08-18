import React from 'react';
import imagen1 from '../images/imagen1.jpg'
import { Grid } from '@mui/material';

const Quiza = () => {
    return (
        <Grid container spacing={2} >
            <Grid item xs={10} md={12}
                display='flex'
                justifyContent='center'
                justifyItems='center'
                marginTop='40px'
                marginBottom='20px'
            >
                <h2 className='title'>Quizá te podría interesar</h2>
            </Grid>

            <Grid container
                columns={{ xs: 4, sm: 8, md: 12 }}
                xs={12} md={12}
                display='flex'
                justifyContent='center'
                padding='0px !important'
            >

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
        </Grid>
    );
};

export default Quiza;
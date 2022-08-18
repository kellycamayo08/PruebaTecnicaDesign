import React from 'react';
import { Grid } from '@mui/material';
import '../styles/articulos.css'
import imagen1 from '../images/imagen1.jpg'


const Articulos = () => {
    return (
        <Grid container spacing={2} >
                <Grid item xs={10} md={12}
                    display='flex'
                    justifyContent='center'
                    justifyItems='center'
                    marginTop='40px'
                    marginBottom='20px'
                >
                    <h2 className='title'>Articulos Populares</h2>
                </Grid>

                <Grid container
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    xs={12} md={12}
                    display='flex'
                    justifyContent='center'
                    padding='0px !important'
                >

                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos'  src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Belleza</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>
                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>
                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>
                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>
                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>
                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>
                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>
                    <Grid className='container__card card_articulos'>
                        <div className='container__img img__articulos'>
                            <img className='img img__articulos' src={imagen1} alt="" />
                        </div>
                        <div className='container__contents'>
                            <h3 className='title__card'>Nutrición</h3>
                            <p className='text__card'>Peinados ideal para el cabello</p>
                        </div>
                    </Grid>

                </Grid>
            </Grid>
    );
};

export default Articulos;
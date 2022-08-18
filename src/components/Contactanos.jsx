import React from 'react';
import { Grid } from '@mui/material';
import '../styles/contactanos.css'
import circle from '../images/circulos.png'
import logo from '../images/logo__email.svg'

const Contactanos = () => {
    return (
        <div className='container__contact'>
            <img className='img__circle' src={circle} alt="" srcset="" />
            <Grid>
                <form className='form__contact'>
                   <h1> Contactanos</h1>
                   <input className='input__text' type="text" placeholder='Ingresa tu nombre' />
                   <input className='input__text' type="text" placeholder='Ingresa tu correo' />
                   <input className='input__text input__message' type="text" placeholder='Mensaje' />
                   <button>Enviar</button>
                </form>

            </Grid>
            <img className='img__email' src={logo} alt="" />
        </div>
    );
};

export default Contactanos;
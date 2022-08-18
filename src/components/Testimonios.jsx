import React, { useState } from 'react';
import { Grid } from '@mui/material';
import '../styles/testimonios.css'
import butterfly from '../images/logo__mariposa.svg'

export const TestItems = ({children, width}) => {
    return (
        <div className='testimonios__item' style={{width: width}}>
            {children}
        </div>
    )
}


const Testimonios = ({children}) => {

    const [active, setActive] = useState(0)

    const update = (newIn) => {
        if (newIn < 0) {
            newIn = 0
        }else if(newIn >= React.Children.count(children)){
            newIn = React.Children.count(children) - 1
        }
        setActive(newIn)
    }

    return (
        <Grid spacing={2} 
        margin='100px 0'
        >
            <Grid item xs={10} md={12}
                display='flex'
                justifyContent='center'
                justifyItems='center'
                marginTop='40px'
                marginBottom='20px'
            >
                <h2 className='title'>Testimonios</h2>
            </Grid>

            <Grid 
                columns={{ xs: 4, sm: 8, md: 10 }}
                xs={10} md={10}
                display='flex'
                justifyContent='center'
                padding='0px !important'
            >
                <img className='logo__butterfly' src={butterfly} alt="" />
               
    
                    <div className='testimonios__carousel'>
                        <div className='testimonios__inner'
                        style={{transform: `translateX(-${active * 100}%)`}}>
                            {
                                React.Children.map(children, (child, index) => {
                                    return React.cloneElement(child, { width: '100%'})
                                })
                            }
                        </div>
                        <div className='indicators'>
                            {
                                React.Children.map(children, (child, index) => {
                                    return (
                                        <button 
                                        className={`${index === active ? 'active': 'inactive'}`}
                                        onClick={() =>{update(index)} }>
                               
                                        </button>
                                    )
                                })
                            }
                        </div>
                        <img className='butterfly__dos' src={butterfly} alt="" />
                    </div>

            </Grid>
        </Grid>
    );
};

export default Testimonios;
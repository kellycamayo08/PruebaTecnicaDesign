import React, { useState } from 'react';
import { Grid } from '@mui/material';
import '../styles/preguntasF.css'

const Accordion = ({ title, children }) => {
    const [Open, setOpen] = useState(false)
    return (
        <div className='accordion__wrapper'>
            <div className={`accordion__title ${Open ? 'open' : ""}`}
                onClick={() => setOpen(!Open)}>
                {title}
            </div>
            <div className={`accordion__item ${!Open ? 'collapsed' : ''}`}>
                <div className='accordion__content'>
                    {children}
                </div>
            </div>
        </div>

    )
}


const PreguntasF = () => {
    return (
        <Grid container 
        margin='150px 0'
        justifyContent='center'
        justifyItems='center'
        >
            <Grid item xs={8} md={10}
                display='flex'
                justifyContent='center'
                justifyItems='center'
                alignItems='center'
                marginTop='40px'
                marginBottom='20px'
                
            >
                <h2 className='title'>Preguntas Frecuentes</h2>
            </Grid>
            
                <Grid item 
                 
                   
                    padding='0px !important'
                >
                    <div sx={4} className='wrapper'>
                        <Accordion title='¿Cuáles son los pasos para tomar una decisión?' >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta adipisci sunt debitis nihil corporis dolores doloremque, molestias natus iure laboriosam doloribus voluptas laborum iusto facilis consectetur eius est dignissimos ut!
                        </Accordion>
                        <Accordion title='¿Cuáles son los pasos para tomar una decisión?' >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta adipisci sunt debitis nihil corporis dolores doloremque, molestias natus iure laboriosam doloribus voluptas laborum iusto facilis consectetur eius est dignissimos ut!
                        </Accordion>
                        <Accordion title='¿Cuáles son los pasos para tomar una decisión?' >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta adipisci sunt debitis nihil corporis dolores doloremque, molestias natus iure laboriosam doloribus voluptas laborum iusto facilis consectetur eius est dignissimos ut!
                        </Accordion>
                    </div>
               
            </Grid>
        </Grid>
    );
};

export default PreguntasF;
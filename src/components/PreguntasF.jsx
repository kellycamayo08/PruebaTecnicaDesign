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
        <Grid container spacing={2}
        margin='150px 0'
        >
            <Grid item xs={10} md={12}
                display='flex'
                justifyContent='center'
                justifyItems='center'
                marginTop='40px'
                marginBottom='20px'
            >
                <h2 className='title'>Preguntas Frecuentes</h2>
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
                    <div className='wrapper'>
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
        </Grid>
    );
};

export default PreguntasF;
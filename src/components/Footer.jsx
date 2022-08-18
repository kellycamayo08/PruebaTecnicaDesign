import React from 'react';
import { Grid } from '@mui/material';
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='container__footer'>
            <Grid>
                <Grid>
                    <h5>
                        mcontigo
                    </h5>
                </Grid>
                <Grid>
                    <p>La Mente es Maravillosa is a property of Grupo MContigo</p>
                    <p>© 2012 – 2020. All rights reserved.</p>
                    <p>Los contenidos de esta publicación se redactan solo con fines informativos. En ningún momento pueden servir para facilitar diagnósticos o sustituir la labor de un profesional. Le recomendamos que contacte con su especialista de confianza.</p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
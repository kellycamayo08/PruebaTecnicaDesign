import React from 'react';
import Nav from './components/Nav';
import Carousel, { CarouselItem } from './components/Carousel';
import img1 from '../src/images/ban.png'
import img2 from '../src/images/ban1.png'
import img3 from '../src/images/ban2.png'
import ContenidoSalud from './components/ContenidoSalud';
import './styles/app.css'
import Articulos from './components/Articulos';
import Quiza from './components/Quiza';
import Testimonios, { TestItems } from './components/Testimonios';
import PreguntasF from './components/PreguntasF';
import Contactanos from './components/Contactanos';
import Footer from './components/Footer';
import comillas from './images/comillas.svg'

const App = () => {
  return (
    <>
      <div>
        <Nav />
        <Carousel>
          <CarouselItem><img className='img1' src={img1} alt='img1' /></CarouselItem>
          <CarouselItem><img className='img1' src={img2} alt='img2' /></CarouselItem>
          <CarouselItem><img className='img1' src={img3} alt='img3' /></CarouselItem>
        </Carousel>
        <ContenidoSalud />
        <Articulos />
        <Quiza />
        <Testimonios>
          <TestItems>
            <img src={comillas} alt='' />
            <p className='text__testimonio'>
              Me gustaría agradecer al sitio, me ayudó de una manera inimaginable,
              el psicólogo fue sumamente servicial y acogedor conmigo
              y me siento mejor conmigo mismo.
            </p>
            <p>~ Maria Montessori ~</p>
          </TestItems>
          <TestItems>
            <img src={comillas} alt='' />
            <p className='text__testimonio'>
              Vitae suscipit tellus mauris a diam mecenas sed enim ut. Mauris augue
              neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin</p>
              <p>~ Duvan Guzman ~</p>
              </TestItems>
            
          <TestItems>
          <img src={comillas} alt=''/>

            <p className='text__testimonio'>
              Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum
              pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent
              elementum.
            </p>
            <p>~ Elena Montessori ~</p>

          </TestItems>
        </Testimonios>
        <PreguntasF />
        <Contactanos />
        <Footer />

      </div>
    </>
  );
};

export default App;
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
import Testimonios from './components/Testimonios';
import PreguntasF from './components/PreguntasF';
import Contactanos from './components/Contactanos';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Nav/>
      <Carousel>
          <CarouselItem><img className='img1' src={img1} alt='img1' /></CarouselItem>
          <CarouselItem><img className='img1' src={img2} alt='img2' /></CarouselItem>
          <CarouselItem><img className='img1' src={img3} alt='img3' /></CarouselItem>
      </Carousel>
      <ContenidoSalud/>
      <Articulos/>
      <Quiza/>
      <Testimonios/>
      <PreguntasF/>
      <Contactanos/>
      <Footer/>
    
    </div>
  );
};

export default App;
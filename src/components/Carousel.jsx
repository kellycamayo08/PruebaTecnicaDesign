import React, {  useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import '../styles/carousel.css'
import next from '../images/next.svg'
import prev from '../images/prev.svg'

export const CarouselItem = ({children,width}) => {
    return (
        <div className='carousel__item' style={{width: width}}>
            {children}
        </div>

    )
}

const Carousel = ({children}) => {

    const [activeCar, setActiveCar] = useState(0)

    const updateCarousel = (newI) => {
        
        if(newI < 0){
            newI = React.Children.count(children) - 1
           
        }else if(newI >= React.Children.count(children)){
            newI = 0
        }
        setActiveCar(newI)
    }

    useEffect(() => {
     const interval = setInterval(() => {
        updateCarousel(activeCar + 1)
     }, 5000);
    
      return () => {
        if(interval){
            clearInterval(interval)
        }
      }
    })

    const handlers = useSwipeable({
        onSwipedLeft: () => updateCarousel(activeCar + 1),
        onSwipedRight: () => updateCarousel(activeCar + 1)
    })
    

    return (
        <div 
        {...handlers}
        className='carousel__container'>
            <div className='inner' style={{transform: `translateX(-${activeCar * 100}%)`}}>
                {
                    React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, {width:'100%'})
                    })
                }
            </div>
            <button
            className='button__previous'
            onClick={() => {
                updateCarousel(activeCar - 1)
            }}
            >
                <img className='img__NyP ' src={prev} alt="" />
            </button>
            <button
            className='button__next'
             onClick={() => {
                updateCarousel(activeCar + 1)
            }}
            >
                <img className='img__NyP ' src={next} alt="" />
            </button>
        </div>
    );
};

export default Carousel;
import React, {useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Button from './Button';

const Heroslider = props => {
    const data = props.data;

    const timeout = props.timeout ? props.timeout : 3000;
    const [activeslider, setactiveslider] = useState(0)
  
    const nextSlide = useCallback(
        () => {
            const index = activeslider + 1 > data.length - 1 ? 0 : activeslider + 1;
        setactiveslider(index); 
        },
        [activeslider, data],
    )
    const preSlide =()=>{
        const index = activeslider - 1 < 0 ? data.length - 1 : activeslider - 1;
        setactiveslider(index); 
    }
    
    useEffect(() => {
       if(props.auto){

        const slideAuto = setInterval(() => {
            nextSlide();
        }, timeout);
        return () => {
           clearInterval(slideAuto);
        }
       }
       
    }, [nextSlide, timeout, props])
    return (
        <div className='hero__slider'>
           {
             data.map((item, index) => (
               <HeroSliderItem key={index} item ={item} active= {index === activeslider} />
             ))
           }
           {
               props.control ? (
                   <div className="hero__slider__control">
                       <div className="hero__slider__control__item" onClick={preSlide}>
                       <i className='bx bx-chevron-left' ></i>
                       </div>
                       <div className="hero__slider__control__item">
                           <div className="index">
                               {activeslider + 1}/{data.length}
                           </div>
                       </div>
                       <div className="hero__slider__control__item" onClick ={nextSlide}>
                       <i className='bx bx-chevron-right' ></i>
                       </div>
                   </div>

               ) : null
           }
        </div>
    )
}

Heroslider.propTypes = {
   data: PropTypes.array.isRequired,
   control: PropTypes.bool,
   auto: PropTypes.bool,
   timeout: PropTypes.number
}
const HeroSliderItem =props =>(
     <div className={`hero__slider__item ${props.active ? 'active' : ''}`}>
         <div className="hero__slider__item__info">
             <div className={`hero__slider__item__info__title color-${props.item.color}`}>
                  <span>{props.item.title}</span>
             </div>
             <div className="hero__slider__item__info__description">
                  <span>{props.item.description}</span>
             </div>
            <div className="hero__slider__item__info__btn">
                 <Link to={props.item.path}>
                     <Button backgroundColor={props.item.color}
                          icon='bx bx-cart'
                          aminte={true}>
                              Xem chi tiết
                     </Button>
                   
                 </Link>
             </div>
         </div>
         <div className="hero__slider__item__image">
             <div className={`shape bg-${props.item.color}`}></div>
             <img src={props.item.img} alt="" />
         </div>
     </div>
)

export default Heroslider

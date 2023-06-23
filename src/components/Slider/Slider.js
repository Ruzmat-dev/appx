import React from 'react';
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImages from '../../assets/images/e-commerce.png';

const Slider = () => {
  return (
    <div className = "hero-slider">
      <div className='hero-slider-item'>
        <img src = {sliderImages} alt = "" />
      </div>
    </div>
  )
}

export default Slider
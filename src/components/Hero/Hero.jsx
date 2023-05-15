import heroImage1 from '@assets/images/hero-1.jpg';
import heroImage2 from '@assets/images/hero-2.jpg';
import heroImage3 from '@assets/images/hero-3.jpg';
import heroImage4 from '@assets/images/hero-4.jpg';
import heroImage5 from '@assets/images/hero-5.jpg';
import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    const slides = document.querySelectorAll('.hero__carousel-item');
    console.log(slides);

    let currentSlide = 0;
    const interval = setInterval(() => {
      slides[currentSlide].classList.remove('hero__carousel-item--active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('hero__carousel-item--active');
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <div className='hero'>
      <div className='hero__carousel'>
        <div className='hero__carousel-item hero__carousel-item--active'>
          <img src={heroImage1} alt='' className='hero__carousel-image' />
        </div>

        <div className='hero__carousel-item'>
          <img src={heroImage2} alt='' className='hero__carousel-image' />
        </div>

        <div className='hero__carousel-item'>
          <img src={heroImage3} alt='' className='hero__carousel-image' />
        </div>

        <div className='hero__carousel-item'>
          <img src={heroImage4} alt='' className='hero__carousel-image' />
        </div>

        <div className='hero__carousel-item'>
          <img src={heroImage5} alt='' className='hero__carousel-image' />
        </div>
      </div>
    </div>
  );
};

export default Hero;

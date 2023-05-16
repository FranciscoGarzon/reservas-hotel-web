import heroImage1 from '@assets/images/hero-1.jpg';
import heroImage2 from '@assets/images/hero-2.jpg';
import heroImage3 from '@assets/images/hero-3.jpg';
import heroImage4 from '@assets/images/hero-4.jpg';
import heroImage5 from '@assets/images/hero-5.jpg';
import chevronIcon from '@assets/icons/chevron.svg';
import { useEffect, useState } from 'react';
import './Hero.css';

const slides = [
  {
    src: {heroImage1},
    alt: 'Image 1'
  },
  {
    src: {heroImage2},
    alt: 'Image 2'
  },
  {
    src: {heroImage3},
    alt: 'Image 3'
  },
  {
    src: {heroImage4},
    alt: 'Image 4'
  },
  {
    src: {heroImage5},
    alt: 'Image 5'
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState({});

  const handlePrevious = () => {
    if (index === 0) {
      setIndex(() => slides.length - 1);
      return;
    }

    setIndex(() => index - 1);
  };

  const handleNext = () => {
    if (index === slides.length - 1) {
      setIndex(0);
      return;
    }

    setIndex(() => index + 1);
  };

  useEffect(() => {
    setCurrentSlide(slides[index]);
  }, [index]);

  return (
    <div className='hero'>
      <div className='hero__carousel'>
        <div className='hero__carousel-item'>
          <img
            src={currentSlide.src}
            alt={currentSlide.alt}
            className='hero__carousel-image'
          />
        </div>
      </div>

      <div className='hero__controls'>
        <button onClick={handlePrevious} className='hero__control'>
          <img
            src={chevronIcon}
            alt='chevron icon'
            className='hero__chevron-icon'
          />
        </button>

        <button
          onClick={handleNext}
          className='hero__control hero__control--right'
        >
          <img
            src={chevronIcon}
            alt='chevron icon'
            className='hero__chevron-icon'
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;

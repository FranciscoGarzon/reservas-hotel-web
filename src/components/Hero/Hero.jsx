import chevronIcon from '@assets/icons/chevron.svg';
import { useEffect, useState } from 'react';
import './Hero.css';

const slides = [
  {
    src: 'https://i.imgur.com/UYTAbEX.jpg',
    alt: 'Image 1'
  },
  {
    src: 'https://i.imgur.com/lVL6USf.jpg',
    alt: 'Image 2'
  },
  {
    src: 'https://i.imgur.com/fTtqKJl.jpg',
    alt: 'Image 3'
  },
  {
    src: 'https://i.imgur.com/eD6IS3Y.jpg',
    alt: 'Image 4'
  },
  {
    src: 'https://i.imgur.com/cAGfIb9.jpg',
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

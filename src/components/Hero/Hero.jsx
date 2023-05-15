import { useEffect, useState } from 'react';
import './Hero.css';

const slides = [
  {
    src: 'src/assets/images/hero-1.jpg',
    alt: 'Image 1'
  },
  {
    src: 'src/assets/images/hero-2.jpg',
    alt: 'Image 2'
  },
  {
    src: 'src/assets/images/hero-3.jpg',
    alt: 'Image 3'
  },
  {
    src: 'src/assets/images/hero-4.jpg',
    alt: 'Image 4'
  },
  {
    src: 'src/assets/images/hero-5.jpg',
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

      <div className='hero__carousel-controls'>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Hero;

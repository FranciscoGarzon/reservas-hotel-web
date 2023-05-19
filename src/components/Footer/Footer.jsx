import facebookLogo from '@assets/icons/facebook.svg';
import instagramLogo from '@assets/icons/instagram.svg';
import twitterLogo from '@assets/icons/twitter.svg';
import youtubeLogo from '@assets/icons/youtube.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__info'>
        <p>Una experiencia GHL</p>
        <p>Buenas razones para que reserve con nosotros</p>
        <p>HOTEL PARADISE</p>
        <p>Carrera 104A # 16 - 23</p>
        <p>Bogotá</p>
        <p>Tel: +57 (601) 2280970 </p>
      </div>

      <div className='footer__social-media'>
        <a href='https://www.facebook.com' rel='noreferrer' target='_blank'>
          <img
            src={facebookLogo}
            alt='facebook logo'
            aria-label='Know more in our facebook page'
          />
        </a>
        <a href='https://www.twitter.com' rel='noreferrer' target='_blank'>
          <img
            src={twitterLogo}
            alt='twitter logo'
            aria-label='Know more in our twitter page'
          />
        </a>
        <a href='https://www.youtube.com' rel='noreferrer' target='_blank'>
          <img
            src={youtubeLogo}
            alt='youtube logo'
            aria-label='Know more in our youtube channel'
          />
        </a>
        <a href='https://www.instagram.com' rel='noreferrer' target='_blank'>
          <img
            src={instagramLogo}
            alt='instagram logo'
            aria-label='Know more in our instagram page'
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

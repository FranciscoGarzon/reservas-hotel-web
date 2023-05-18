import facebookLogo from '@assets/icons/facebook.svg';
import instagramLogo from '@assets/icons/instagram.svg';
import twitterLogo from '@assets/icons/twitter.svg';
import youtubeLogo from '@assets/icons/youtube.svg';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div>Una experiencia GHL</div>
      <div>Buenas razones para que reserve con nosotros</div>
      <div>HOTEL PARADISE</div>
      <div>Carrera 104A # 16 - 23</div>
      <div>Bogotá</div>
      <div>Tel: +57 (601) 2280970 </div>
      <a href='https://www.facebook.com' rel='noreferrer' target='_blank'>
        <img src={facebookLogo} alt='' />
      </a>
      <a href='https://www.twitter.com' rel='noreferrer' target='_blank'>
        <img src={twitterLogo} alt='' />
      </a>
      <a href='https://www.youtube.com' rel='noreferrer' target='_blank'>
        <img src={youtubeLogo} alt='' />
      </a>
      <a href='https://www.instagram.com' rel='noreferrer' target='_blank'>
        <img src={instagramLogo} alt='' />
      </a>
    </div>
  );
};

export default Footer;

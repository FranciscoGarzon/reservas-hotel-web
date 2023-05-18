import logoHotel from '@assets/images/logo-hotel.png';
import { LoginModal, SignupModal } from '@components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoginOpened, setIsLoginOpened] = useState(false);
  const [isSignupOpened, setIsSignupOpened] = useState(false);

  return (
    <div className='header'>
      <Link to='/'>
        <img src={logoHotel} alt='' className='header__logo' />
      </Link>

      <nav className='header__navigation'>
        <menu className='header__menu'>
          <li className='header__item'>
            <Link to='/'>Inicio</Link>
          </li>
          <li className='header__item'>
            <Link to='/planes'>Planes</Link>
          </li>
          <li className='header__item'>
            <Link to='/servicios'>Servicios</Link>
          </li>
          <li className='header__item'>
            <Link to='/habitaciones'>Habitaciones</Link>
          </li>
        </menu>

        <div className='header__buttons'>
          <button
            className='header__button'
            onClick={() => setIsLoginOpened(!isLoginOpened)}
          >
            Iniciar sesión
          </button>

          <button
            className='header__button'
            onClick={() => setIsSignupOpened(!isSignupOpened)}
          >
            Crear cuenta
          </button>
        </div>
      </nav>

      <LoginModal isOpened={isLoginOpened} setIsOpened={setIsLoginOpened} />
      <SignupModal isOpened={isSignupOpened} setIsOpened={setIsSignupOpened} />
    </div>
  );
};

export default Header;

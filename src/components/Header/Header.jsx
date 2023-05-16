import logoHotel from '@assets/images/logo-hotel.png';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logoHotel} alt='' className='header__logo' />

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
          <button className='header__button'>Iniciar sesión</button>
          <button className='header__button'>Crear cuenta</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

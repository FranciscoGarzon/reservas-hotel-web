import logoHotel from '@assets/logo-hotel.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logoHotel} alt='' className='header__logo' />

      <nav className='header__navigation'>
        <menu className='header__menu'>
          <li className='header__item'>Inicio</li>
          <li className='header__item'>Planes</li>
          <li className='header__item'>Servicios</li>
          <li className='header__item'>Habitaciones</li>
        </menu>

        <div className='header__buttons'>
          <button>Iniciar sesión</button>
          <button>Crear cuenta</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;

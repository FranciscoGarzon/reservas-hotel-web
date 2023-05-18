import { useRef } from 'react';
import './LoginModal.css';

const LoginModal = ({ isOpened, setIsOpened }) => {
  const login = useRef(null);

  if (!isOpened) {
    return null;
  }

  const handleClick = (event) => {
    if (event.target === login.current) {
      setIsOpened(!isOpened);
    }
  };

  return (
    <div className='login' ref={login} onClick={handleClick}>
      <dialog className='login__modal' open={isOpened}>
        <header>
          <h3 className='login__title'>Inicia sesión</h3>
        </header>

        <form className='login__form'>
          <div className='login__form-group'>
            <input
              className='login__input'
              type='email'
              placeholder='Correo electrónico'
              required
            />
            <input
              className='login__input'
              type='password'
              placeholder='Contraseña'
              required
            />
          </div>

          <div className='login__form-button'>
            <button className='login__button' type='submit'>
              Iniciar sesión
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;

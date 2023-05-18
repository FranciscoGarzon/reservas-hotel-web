import { useRef } from 'react';
import './SignupModal.css';

const SignupModal = ({ isOpened, setIsOpened }) => {
  const signup = useRef(null);

  if (!isOpened) {
    return null;
  }

  const handleClick = (event) => {
    if (event.target === signup.current) {
      setIsOpened(!isOpened);
    }
  };

  return (
    <div className='signup' ref={signup} onClick={handleClick}>
      <dialog className='signup__modal' open={isOpened}>
        <header>
          <h3 className='signup__title'>Crea tu cuenta</h3>
        </header>

        <form className='signup__form'>
          <div className='signup__form-group'>
            <input
              className='signup__input'
              type='text'
              placeholder='Nombre'
              required
            />
            <input
              className='signup__input'
              type='text'
              placeholder='Apellido'
              required
            />
            <input
              className='signup__input'
              type='email'
              placeholder='Correo electrónico'
              required
            />
            <input
              className='signup__input'
              type='tel'
              placeholder='Teléfono'
              required
            />
            <input
              className='signup__input'
              type='password'
              placeholder='Contraseña'
              required
            />
          </div>

          <div className='signup__form-button'>
            <button className='signup__button' type='submit'>
              Crear cuenta
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default SignupModal;

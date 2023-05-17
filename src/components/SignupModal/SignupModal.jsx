import './SignupModal.css';

const SignupModal = ({ isOpened, setIsOpened }) => {
  if (!isOpened) {
    return null;
  }

  const handleClick = (event) => {
    event.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <div className='signup'>
      <dialog className='signup__modal' open={isOpened}>
        <form className='signup__form'>
          <label className='signup__label'>
            <span>Nombre</span>
            <input className='signup__input' type='text' required />
          </label>

          <label className='signup__label'>
            <span>Apellido</span>
            <input className='signup__input' type='text' required />
          </label>

          <label className='signup__label'>
            <span>Correo electrónico</span>
            <input className='signup__input' type='email' required />
          </label>

          <label className='signup__label'>
            <span>Teléfono</span>
            <input className='signup__input' type='number' required />
          </label>

          <label className='signup__label'>
            <span>Contraseña</span>
            <input className='signup__input' type='password' required />
          </label>

          <button
            className='signup__button'
            type='submit'
            onClick={handleClick}
          >
            Crear cuenta
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default SignupModal;

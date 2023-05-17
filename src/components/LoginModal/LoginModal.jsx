import './LoginModal.css';

const LoginModal = ({ isOpened, setIsOpened }) => {
  if (!isOpened) {
    return null;
  }

  const handleClick = (event) => {
    event.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <div className='login' onClick={handleClick}>
      <dialog className='login__modal' open={isOpened}>
        <form className='login__form'>
          <label className='login__label'>
            <span>Login</span>
            <input className='login__input' type='text' />
          </label>

          <label className='login__label'>
            <span>Password</span>
            <input className='login__input' type='password' />
          </label>

          <button className='login__button' type='submit' onClick={handleClick}>
            Login
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;

import './LoginModal.css';

const LoginModal = () => {
  return (
    <div className='login'>
      <dialog className='login__modal'>
        <form className='login__form'>
          <label className='login__label'>
            <span>Login</span>
            <input className='login__input' id='login' type='text' />
          </label>

          <label className='login__label'>
            <span>Password</span>
            <input className='login__input' id='password' type='password' />
          </label>

          <button className='login__button' type='submit'>
            Login
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default LoginModal;

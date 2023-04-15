import SignUpForm from '../SignUp-form/SignUp';
import SignInForm from '../SignIn-form/SignIn';

import './authentication.style.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
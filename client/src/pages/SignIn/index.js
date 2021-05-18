import { Helmet } from 'react-helmet';

import SignInForm from 'components/SignInForm';

import './SignIn.css';

const SignIn = () => {
  return (
    <div className='signin-page'>
      <Helmet>
        <title>Sign In | Challenge-JS</title>
        <meta name='description' content='Sign in form' />
      </Helmet>
      <SignInForm />
    </div>
  );
};

export default SignIn;

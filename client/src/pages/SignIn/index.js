import { Helmet } from 'react-helmet';

import SignInForm from 'components/SignInForm';

const SignIn = () => {
  return (
    <div>
      <Helmet>
        <title>Sign In | Challenge-JS</title>
        <meta name='description' content='Sign in form' />
      </Helmet>
      <SignInForm />
    </div>
  );
};

export default SignIn;

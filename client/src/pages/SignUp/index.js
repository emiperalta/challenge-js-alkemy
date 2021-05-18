import { Helmet } from 'react-helmet';

import SignUpForm from 'components/SignUpForm';

const SignUp = () => {
  return (
    <div>
      <Helmet>
        <title>Sign Up | Challenge-JS</title>
        <meta name='description' content='Sign up form' />
      </Helmet>
      <SignUpForm />
    </div>
  );
};

export default SignUp;

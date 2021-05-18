import { useEffect, useState } from 'react';
import { Button, Container, Form, Header } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import useUser from 'hooks/useUser';

import './SignInForm.css';

const SignInForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const { isLogged, userSignIn } = useUser();

  useEffect(() => {
    if (isLogged) {
      history.push('/');
    }
  }, [isLogged, history]);

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePassChange = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    userSignIn({ email, password })
      .then(() => {})
      .catch(err => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setMessage(err.message);
        setTimeout(() => setMessage(''), 5000);
      });
  };

  return (
    <Container className='login-container'>
      <Header as='h2' textAlign='center'>
        Sign in
      </Header>
      <Form className='login-form' size='big' onSubmit={handleSubmit}>
        <Form.Input
          fluid
          label='Email'
          onChange={handleEmailChange}
          placeholder='example@gmail.com'
          value={email}
        />
        <Form.Input
          fluid
          label='Password'
          onChange={handlePassChange}
          placeholder='Password'
          type='password'
          value={password}
        />
        <Button type='submit'>Sign in</Button>
      </Form>
      {message && (
        <Header as='h5' color='red' textAlign='center'>
          {message}
        </Header>
      )}
    </Container>
  );
};

export default SignInForm;

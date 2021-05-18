import { useEffect, useState } from 'react';
import { Button, Container, Form, Header } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

import useUser from 'hooks/useUser';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const { isLogged, userSignUp } = useUser();

  useEffect(() => {
    if (isLogged) {
      history.push('/');
    }
  }, [isLogged, history]);

  const handleUsernameChange = e => setUsername(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePassChange = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    userSignUp({ username, email, password })
      .then(res => history.push('/signin'))
      .catch(err => {
        setMessage(err.message);
        setTimeout(() => setMessage(''), 5000);
      });
  };

  return (
    <Container className='login-container'>
      <Header as='h2' textAlign='center'>
        Sign up
      </Header>
      <Form className='login-form' size='big' onSubmit={handleSubmit}>
        <Form.Input
          fluid
          label='Username'
          onChange={handleUsernameChange}
          placeholder='Username'
          value={username}
        />
        <Form.Input
          fluid
          label='Email'
          onChange={handleEmailChange}
          placeholder='example@gmail.com'
          type='email'
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
        <Button type='submit'>Sign up</Button>
      </Form>
      {message && (
        <Header as='h5' color='red' textAlign='center'>
          {message}
        </Header>
      )}
    </Container>
  );
};

export default SignUpForm;

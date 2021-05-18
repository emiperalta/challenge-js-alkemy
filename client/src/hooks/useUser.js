import { useContext } from 'react';

import UserContext from 'context/UserContext';

import * as userService from 'services/userService';

const useUser = () => {
  const { token, setToken, loggedUser, setLoggedUser } = useContext(UserContext);

  const userSignIn = ({ email, password }) => {
    return userService.signIn({ email, password }).then(res => {
      if (res.error) throw new Error(res.error);
      setToken(res.token);
      setLoggedUser(res.user);
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', res.user);
    });
  };

  const userSignOut = () => {
    setToken(null);
    setLoggedUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const userSignUp = ({ username, email, password }) => {
    return userService.signUp({ username, email, password }).then(res => {
      if (res.error) throw new Error(res.error);
      return res;
    });
  };

  return {
    isLogged: Boolean(token),
    loggedUser,
    token,
    userSignIn,
    userSignOut,
    userSignUp,
  };
};

export default useUser;

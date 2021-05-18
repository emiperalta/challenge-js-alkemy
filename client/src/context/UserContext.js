import { createContext, useState } from 'react';

const Context = createContext();

export const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loggedUser, setLoggedUser] = useState(() => localStorage.getItem('user'));

  return (
    <Context.Provider value={{ token, setToken, loggedUser, setLoggedUser }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

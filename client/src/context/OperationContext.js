import { createContext, useState } from 'react';

const Context = createContext({});

export const OperationContextProvider = ({ children }) => {
  const [operations, setOperations] = useState([]);

  return (
    <Context.Provider value={{ operations, setOperations }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

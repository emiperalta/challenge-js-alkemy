import { createContext, useState } from 'react';

const Context = createContext({});

export const OperationContextProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState();
  const [operations, setOperations] = useState([]);

  return (
    <Context.Provider value={{ operations, setOperations, currentId, setCurrentId }}>
      {children}
    </Context.Provider>
  );
};

export default Context;

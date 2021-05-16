import { useContext, useEffect, useState } from 'react';

import OperationContext from 'context/OperationContext';

import * as operationService from 'services/operationService';

const useOperation = () => {
  const [currentId, setCurrentId] = useState();
  const { operations, setOperations } = useContext(OperationContext);

  useEffect(() => {
    operationService
      .getAllOps()
      .then(ops => setOperations(ops))
      .catch(err => console.error(err));
  }, [setOperations]);

  const addNewOp = ({ concept, amount, date, typeId }) => {
    return operationService
      .addOp({ concept, amount, date, typeId })
      .then(res => setOperations([...operations, res]))
      .catch(err => console.error(err));
  };

  const updateOpe = (id, { concept, amount, date, typeId }) => {
    return operationService
      .updateOp(id, { concept, amount, date, typeId })
      .then(res => {
        console.log({ res });
        setOperations([...operations.map(op => (op.id === id ? res : op))]);
      })
      .catch(err => console.error(err));
  };

  const deleteOpe = id => {
    return operationService
      .deleteOp(id)
      .then(() => setOperations([...operations.filter(op => op.id !== id)]))
      .catch(err => console.error(err));
  };

  return {
    addNewOp,
    currentId,
    deleteOpe,
    operations,
    setCurrentId,
    updateOpe,
  };
};

export default useOperation;

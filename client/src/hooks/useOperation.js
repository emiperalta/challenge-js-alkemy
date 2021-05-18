import { useContext, useEffect } from 'react';

import OperationContext from 'context/OperationContext';

import * as operationService from 'services/operationService';

const useOperation = () => {
  const { operations, setOperations, currentId, setCurrentId } =
    useContext(OperationContext);

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
      .then(res =>
        setOperations([...operations.map(op => (op.id === id ? res : op))])
      )
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
    orderedList: operations.sort((a, b) =>
      a.date > b.date ? -1 : b.date > a.date ? 1 : 0
    ),
    setCurrentId,
    updateOpe,
  };
};

export default useOperation;

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

  const addNewOp = ({ concept, amount, date, typeId }, token) => {
    return operationService
      .addOp({ concept, amount, date, typeId }, token)
      .then(res => {
        if (res.error) throw new Error(res.error);
        setOperations([...operations, res]);
      });
  };

  const updateOpe = (id, { concept, amount, date, typeId }, token) => {
    return operationService
      .updateOp(id, { concept, amount, date, typeId }, token)
      .then(res => {
        if (res.error) throw new Error(res.error);
        setOperations([...operations.map(op => (op.id === id ? res : op))]);
      });
  };

  const deleteOpe = (id, token) => {
    return operationService
      .deleteOp(id, token)
      .then(res => {
        setOperations([...operations.filter(op => op.id !== id)]);
        if (res) return res.json();
      })
      .then(data => {
        if (data.error) throw new Error(data.error);
      })
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

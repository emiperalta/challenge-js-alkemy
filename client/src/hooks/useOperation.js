import { useContext, useEffect } from 'react';

import OperationContext from 'context/OperationContext';

import * as operationService from 'services/operationService';

const useOperation = () => {
  const { operations, setOperations } = useContext(OperationContext);

  useEffect(() => {
    operationService
      .getAllOps()
      .then(ops => setOperations(ops))
      .catch(err => console.error(err));
  }, [setOperations]);

  const addNewOp = ({ concept, amount, date, typeId }) => {
    return operationService.addOp({ concept, amount, date, typeId }).then(res => {
      setOperations([...operations, res]);
    });
  };

  return {
    operations,
    addNewOp,
  };
};

export default useOperation;

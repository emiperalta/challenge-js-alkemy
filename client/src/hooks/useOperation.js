import { useState, useEffect } from 'react';

import { getAllOps } from 'services/operationService';

const useOperation = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    getAllOps()
      .then(ops => setOperations(ops))
      .catch(err => console.error(err));
  }, []);

  return {
    operations,
  };
};

export default useOperation;

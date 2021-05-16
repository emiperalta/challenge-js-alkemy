import { useLocation } from 'react-router-dom';

import OperationItem from './OperationItem';
import LastTenList from './LastTenList';
import AllOpsList from './AllOpsList';

import './OperationList.css';

const OperationList = ({ operations, setCurrentId }) => {
  const location = useLocation();

  const path = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  const listToShowInHome = operations
    .sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))
    .map(el => <OperationItem key={el.id} item={el} />);

  const listToShowInOp = operations.sort((a, b) =>
    a.date > b.date ? -1 : b.date > a.date ? 1 : 0
  );

  return (
    <>
      {path === 'home' ? (
        <LastTenList listToShow={listToShowInHome} operations={operations} />
      ) : (
        <AllOpsList listToShow={listToShowInOp} setCurrentId={setCurrentId} />
      )}
    </>
  );
};

export default OperationList;

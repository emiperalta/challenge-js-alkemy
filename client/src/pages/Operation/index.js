import Helmet from 'react-helmet';

import useOperation from 'hooks/useOperation';

import OperationForm from 'components/Operation/Form';
import OperationList from 'components/Operation/List';

import './Operation.css';

const List = () => {
  const { currentId, setCurrentId, operations } = useOperation();

  return (
    <div>
      <Helmet>
        <title>Operation | Challenge-JS</title>
        <meta name='description' content='Form and list of operations' />
      </Helmet>

      <section className='operation-form'>
        <OperationForm currentId={currentId} setCurrentId={setCurrentId} />
      </section>
      <section className='operation-table'>
        <OperationList operations={operations} setCurrentId={setCurrentId} />
      </section>
    </div>
  );
};

export default List;

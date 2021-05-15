import Helmet from 'react-helmet';

import useOperation from 'hooks/useOperation';

import OperationForm from 'components/Operation/Form';
import OperationList from 'components/Operation/List';

import './Operation.css';

const List = () => {
  const { operations } = useOperation();

  return (
    <div>
      <Helmet>
        <title>List | Challenge-JS</title>
        <meta name='description' content='CRUD and list of operations' />
      </Helmet>

      <section className='operation-form'>
        <OperationForm />
      </section>
      <section className='operation-table'>
        <OperationList operations={operations} />
      </section>
    </div>
  );
};

export default List;

import Helmet from 'react-helmet';

import useOperation from 'hooks/useOperation';

import OperationForm from 'components/Operation/Form';
import OperationList from 'components/Operation/List/AllOpsList';

import './Operation.css';

const List = () => {
  const { currentId, setCurrentId, orderedList } = useOperation();

  return (
    <div>
      <Helmet>
        <title>Operation | Challenge-JS</title>
        <meta name='description' content='Form and list of operations' />
      </Helmet>
      <section className='op-form-section'>
        <OperationForm currentId={currentId} setCurrentId={setCurrentId} />
      </section>
      <section className='op-table-section'>
        <OperationList listToShow={orderedList} setCurrentId={setCurrentId} />
      </section>
    </div>
  );
};

export default List;

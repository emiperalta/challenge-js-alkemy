import { Container, Header, List } from 'semantic-ui-react';

import useOperation from 'hooks/useOperation';
import useUser from 'hooks/useUser';

import OperationItem from './OperationItem';
import NoItem from './NoItem';

import './OperationList.css';

const AllOpsList = ({ listToShow, setCurrentId }) => {
  const { deleteOpe } = useOperation();
  const { token } = useUser();

  const handleDelete = id => deleteOpe(id, token);
  const handleUpdate = id => setCurrentId(id);

  return (
    <Container className='container'>
      <div className='title'>
        <Header as='h2'>All operations</Header>
      </div>
      <List divided verticalAlign='middle'>
        {listToShow.length ? (
          listToShow.map(el => (
            <OperationItem
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              item={el}
              key={el.id}
            />
          ))
        ) : (
          <div className='no-item'>
            <NoItem />
          </div>
        )}
      </List>
    </Container>
  );
};

export default AllOpsList;

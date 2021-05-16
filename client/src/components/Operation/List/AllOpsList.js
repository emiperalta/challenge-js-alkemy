import { Container, Header, List, Icon, Button, Popup } from 'semantic-ui-react';
import { format } from 'date-fns';

import useOperation from 'hooks/useOperation';

import NoItem from './NoItem';

const AllOpsList = ({ listToShow, setCurrentId }) => {
  const { deleteOpe } = useOperation();

  const handleDelete = id => {
    deleteOpe(id);
  };

  const handleUpdate = id => setCurrentId(id);

  return (
    <Container className='container'>
      <div className='title'>
        <Header as='h2'>All operations</Header>
      </div>
      <List divided verticalAlign='middle'>
        {listToShow.length ? (
          listToShow.map(el => (
            <List.Item key={el.id}>
              <List.Content floated='right' verticalAlign='middle'>
                <Popup
                  header='Edit this operation'
                  position='top center'
                  trigger={
                    <Button icon='edit' onClick={() => handleUpdate(el.id)} />
                  }
                />
                <Popup
                  header='Delete this operation'
                  position='top center'
                  trigger={
                    <Button icon='delete' onClick={() => handleDelete(el.id)} />
                  }
                />
              </List.Content>
              <Icon name='caret right' />
              <List.Content>
                <List.Header>{el.concept}</List.Header>
                <List.Description>
                  ${el.amount} - {el.typeId === 1 ? 'Income' : 'Expense'}
                </List.Description>
                <List.Description>
                  {format(new Date(el.date), 'dd/MM/yyyy')}
                </List.Description>
              </List.Content>
            </List.Item>
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

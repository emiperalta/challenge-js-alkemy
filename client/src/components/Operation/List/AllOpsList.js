import { Container, Header, List, Icon, Button } from 'semantic-ui-react';
import { format } from 'date-fns';

const AllOpsList = ({ listToShow }) => {
  return (
    <Container className='container'>
      <div className='title'>
        <Header as='h2'>All operations</Header>
      </div>
      <List divided verticalAlign='middle'>
        {listToShow.map(el => (
          <List.Item key={el.id}>
            <List.Content floated='right' verticalAlign='middle'>
              <Button icon='edit'></Button>
              <Button icon='delete'></Button>
            </List.Content>
            <Icon name='caret right' />
            <List.Content>
              <List.Header>{el.concept}</List.Header>
              <List.Description>
                ${el.amount} - {el.typeId === 1 ? 'Income' : 'Expense'}
              </List.Description>
              <List.Description>
                {format(new Date(el.date), 'dd-MM-yyyy')}
              </List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Container>
  );
};

export default AllOpsList;

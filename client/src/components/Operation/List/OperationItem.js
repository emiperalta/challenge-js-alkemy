import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { Button, Icon, List, Popup } from 'semantic-ui-react';

const OperationItem = ({ handleDelete, handleUpdate, item }) => {
  const location = useLocation();

  const path = location.pathname === '/' ? 'home' : location.pathname.substring(1);
  const signToShow = item.typeId === 1 ? '+' : '-';

  return (
    <>
      {path === 'home' ? (
        <List.Item>
          <List.Content>
            <List.Header>{item.concept}</List.Header>
          </List.Content>
          <List.Content>
            {signToShow} ${item.amount}
          </List.Content>
        </List.Item>
      ) : (
        <List.Item>
          <List.Content floated='right' verticalAlign='middle'>
            <Popup
              header='Edit this operation'
              position='top center'
              trigger={<Button icon='edit' onClick={() => handleUpdate(item.id)} />}
            />
            <Popup
              header='Delete this operation'
              position='top center'
              trigger={
                <Button icon='delete' onClick={() => handleDelete(item.id)} />
              }
            />
          </List.Content>
          <Icon name='caret right' />
          <List.Content>
            <List.Header>{item.concept}</List.Header>
            <List.Description>
              ${item.amount} - {item.typeId === 1 ? 'Income' : 'Expense'}
            </List.Description>
            <List.Description>
              {format(new Date(item.date), 'dd/MM/yyyy')}
            </List.Description>
          </List.Content>
        </List.Item>
      )}
    </>
  );
};

export default OperationItem;

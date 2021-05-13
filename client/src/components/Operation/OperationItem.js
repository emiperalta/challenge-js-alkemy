import { List } from 'semantic-ui-react';

const OperationItem = ({ item }) => {
  const signToShow = item.typeId === 1 ? '+' : '-';

  return (
    <List celled>
      <List.Item>
        <List.Content>
          <List.Header>{item.concept}</List.Header>
        </List.Content>
        <List.Content>
          {signToShow} ${item.amount}
        </List.Content>
      </List.Item>
    </List>
  );
};

export default OperationItem;

import { Link } from 'react-router-dom';
import { Header, Icon, Button } from 'semantic-ui-react';

const NoItem = () => {
  return (
    <>
      <Header icon>
        <Icon name='exclamation circle' />
        No operations yet
      </Header>
      <Link to='/operation' style={{ color: 'white' }}>
        <Button primary>Add</Button>
      </Link>
    </>
  );
};

export default NoItem;

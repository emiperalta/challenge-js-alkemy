import { Link } from 'react-router-dom';
import { Header, Icon, Button } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';

const NoItem = () => {
  const location = useLocation();

  const path = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <>
      <Header icon>
        <Icon name='exclamation circle' />
        No operations yet
      </Header>
      <Link to='/operation' style={{ color: 'white' }}>
        {path === 'home' ? <Button primary>Add</Button> : null}
      </Link>
    </>
  );
};

export default NoItem;

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header, Icon, Menu } from 'semantic-ui-react';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  const [activeItem, setActiveItem] = useState(path);

  useEffect(() => {
    setActiveItem(path);
  }, [path]);

  return (
    <>
      <Header as='h3' block attached='top' textAlign='center'>
        Challenge-JS
      </Header>
      <Menu size='large' attached>
        <Menu.Item name='home' as={Link} active={activeItem === 'home'} to='/'>
          <Icon name='home' />
        </Menu.Item>
        <Menu.Item
          name='operation'
          as={Link}
          active={activeItem === 'operation'}
          to='/operation'
        />
        <Menu.Menu position='right'>
          <Menu.Item
            active={activeItem === 'signup'}
            as={Link}
            name='sign up'
            to='/signup'
          />
          <Menu.Item
            active={activeItem === 'signin'}
            as={Link}
            name='sign in'
            to='/signin'
          />
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;

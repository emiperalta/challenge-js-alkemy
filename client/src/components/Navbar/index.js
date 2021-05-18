import { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Button, Header, Icon, Menu } from 'semantic-ui-react';

import useUser from 'hooks/useUser';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  const [activeItem, setActiveItem] = useState(path);
  const history = useHistory();

  const { isLogged, loggedUser, userSignOut } = useUser();

  useEffect(() => {
    setActiveItem(path);
  }, [path, isLogged]);

  const handleSignInClick = () => history.push('/signin');
  const handleSignUpClick = () => history.push('/signup');

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
          {isLogged ? (
            <>
              <Menu.Item>
                <Header as='h4' disabled>
                  Welcome, {loggedUser}
                </Header>
              </Menu.Item>
              <Menu.Item>
                <Button onClick={userSignOut}>Logout</Button>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item active={activeItem === 'signin'}>
                <Button onClick={handleSignInClick}>Sign In</Button>
              </Menu.Item>
              <Menu.Item active={activeItem === 'signup'}>
                <Button onClick={handleSignUpClick}>Sign Up</Button>
              </Menu.Item>
            </>
          )}
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;

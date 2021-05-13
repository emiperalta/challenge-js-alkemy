import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Menu } from 'semantic-ui-react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <>
      <Header as='h3' block attached='top' textAlign='center'>
        Challenge-JS
      </Header>
      <Menu size='large' attached>
        <Menu.Item
          name='home'
          as={Link}
          active={activeItem === 'home'}
          onClick={handleClick}
          to='/'
        />
        <Menu.Item
          name='list'
          as={Link}
          active={activeItem === 'list'}
          onClick={handleClick}
          to='/list'
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to='/signup'>Sign Up</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/signin'>Sign In</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default Navbar;

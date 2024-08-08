import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';

const Header = () => (
  <Menu secondary style={{
    margin: '0',
    padding: '0 50px',
    position: 'sticky',
    top: '0',
    zIndex: '1000',
    backgroundColor: 'white',
    borderBottom: '1px solid #ccc'
  }}>
    <Menu.Item header><h3>DEV@Deakin</h3></Menu.Item>
    <Menu.Menu position='right'>
      <Input style={{ margin: '10px 10px' }} transparent icon='search' placeholder='Search...' />
      <Button style={{ margin: '10px 10px' }} primary>Post</Button>
      <Button style={{ margin: '10px 10px' }} >Login</Button>
    </Menu.Menu>
  </Menu>
);

export default Header;

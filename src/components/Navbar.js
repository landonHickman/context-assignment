import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { UserContext } from '../provider/UserProvider';

const Navbar = () => {
  const {pathname} = useLocation()
  const {firstName, lastName} = useContext(UserContext)
  return(
    <div>
      <Menu>
        <NavLink to='/'>
        <Menu.Item active={pathname === '/'}>
          Home
        </Menu.Item>
        </NavLink>
        <NavLink to='/users/new'>
        <Menu.Item active={pathname === '/users/new'}>
          Add User
        </Menu.Item>
        </NavLink>
        <NavLink to='/users/profile'>
        <Menu.Item active={pathname === '/users/profile'}>
          {firstName +' '+ lastName}
        </Menu.Item>
        </NavLink>
      
      </Menu>
    </div>
  )
}

export default Navbar
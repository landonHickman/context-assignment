import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { UserContext } from '../provider/UserProvider';
import { VillainContext } from '../provider/VillainProvider';

const Navbar = () => {
  const {pathname} = useLocation()
  const {firstName, lastName} = useContext(UserContext)
  const vill = useContext(VillainContext)
  return(
    <div>
      <Menu>
        <NavLink to='/'>
        <Menu.Item active={pathname === '/'}>
          Home
        </Menu.Item>
        </NavLink>
        <NavLink to='/users/profile'>
        <Menu.Item active={pathname === '/users/profile'}>
          {firstName +' '+ lastName}
        </Menu.Item>
        </NavLink>
        <NavLink to='/villains/profile'>
        <Menu.Item active={pathname === '/villains/profile'}>
          {vill.firstName +' '+ vill.lastName}
        </Menu.Item>
        </NavLink>
      
        <NavLink to='/users/new'>
        <Menu.Item active={pathname === '/users/new'}>
          Add Hero
        </Menu.Item>
        </NavLink>
      </Menu>
    </div>
  )
}

export default Navbar
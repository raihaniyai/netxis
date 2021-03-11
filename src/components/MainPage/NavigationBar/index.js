import React, { useContext } from 'react';
import GlobalContext from './../../../contexts/GlobalContext';
import { Menus } from './contants'
import { NavbarStyle, MenuWrapper, MenuIcon, MenuIconActive } from './style';

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useContext(GlobalContext);

  return (
    <div className={NavbarStyle}>
      {Menus.map(menu => (
        <div className={MenuWrapper} key={menu.id} onClick={() => setActiveMenu(menu.id)}>
          <div className={activeMenu === menu.id ? MenuIconActive : MenuIcon}>{menu.icon}</div>
          <div>{menu.title}</div>
        </div>
      ))}
    </div>
  )
};

export default Navbar;
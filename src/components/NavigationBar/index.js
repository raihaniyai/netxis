import React from 'react';
import { HomeOutlined, TagOutlined, FireOutlined, CodepenOutlined, UserOutlined } from '@ant-design/icons';
import { NavbarStyle, MenuWrapper, MenuIcon, MenuIconActive } from './style'

const Navbar = () => {
  return (
    <div className={NavbarStyle}>
      <div className={MenuWrapper}>
        <div className={MenuIconActive}><HomeOutlined /></div>
        <div>Home</div>
      </div>

      <div className={MenuWrapper}>
        <div className={MenuIcon}><TagOutlined /></div>
        <div>Coupons</div>
      </div>

      <div className={MenuWrapper}>
        <div className={MenuIcon}><FireOutlined /></div>
        <div>Explore</div>
      </div>

      <div className={MenuWrapper}>
        <div className={MenuIcon}><CodepenOutlined /></div>
        <div>Ongoing</div>
      </div>

      <div className={MenuWrapper}>
        <div className={MenuIcon}><UserOutlined /></div>
        <div>Account</div>
      </div>
    </div>
  )
};

export default Navbar;
import React from 'react';
import { Container, HeaderTitle, ProfileCard } from './style';
import { List } from 'antd';
import Profile from './Profile/index'

const profileSettings = ['My Cards', 'Netxis Balance', 'Privacy and Security', 'Settings', 'Help', 'Terms of Service', 'Report']

const Coupons = () => {
  return (
    <>
      <div className={Container}>
          <div className={HeaderTitle}>My Account</div>
          <div className={ProfileCard}><Profile /></div>
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            style={{background: "#FFFFFF", color: "#1E1E3F"}}
            dataSource={profileSettings}
            size="large"
            renderItem={item => (
              <List.Item>
               <div>{item}</div>
              </List.Item>
            )}
          />
      </div>
    </>
  )
}

export default Coupons;

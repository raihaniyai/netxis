import React from 'react';
import { StarOutlined, BellOutlined, MoneyCollectOutlined, LogoutOutlined } from '@ant-design/icons';
import {
  Balance,
  BalanceContainer,
  BalanceAction,
  BalanceDescription,
  Header,
  Icon,
  RotateIcon,
  Username,
  WalletContainer,
  Welcome,
} from './style'

const HeaderSection = ({ user }) => {
  return (
    <>
      <div className={Header}>
        <div>
          <div className={Welcome}>Welcome,</div>
          <div className={Username}>{user.name}</div> 
        </div>

        <div>
          <StarOutlined className={Icon} />
          <BellOutlined className={Icon} />
        </div>
      </div>

      <div className={WalletContainer}>
        <div className={BalanceContainer}>
          <div className={Balance}>{user.balance}</div>
          <div className={BalanceDescription}>Netxis Balance</div> 
        </div>

        <div className={BalanceAction}>
          <LogoutOutlined className={RotateIcon} />
          <MoneyCollectOutlined className={Icon} style={{color: "#1E1E3F"}}/>
        </div>
      </div>
    </>
  )
}

export default HeaderSection;

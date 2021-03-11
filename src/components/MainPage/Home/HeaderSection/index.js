import React from 'react';
import { StarOutlined, BellOutlined, MoneyCollectOutlined, LogoutOutlined } from '@ant-design/icons';
import {
  Balance,
  BalanceContainer,
  BalanceAction,
  BalanceDescription,
  BalanceIcon,
  Header,
  Icon,
  RotateIcon,
  Username,
  WalletContainer,
  Welcome,
} from './style'

const HeaderSection = () => {
  return (
    <>
      <div className={Header}>
        <div>
          <div className={Welcome}>Welcome,</div>
          <div className={Username}>Dharmawan Santosa</div> 
        </div>

        <div>
          <StarOutlined className={Icon} />
          <BellOutlined className={Icon} />
        </div>
      </div>

      <div className={WalletContainer}>
        <div className={BalanceContainer}>
          <div className={Balance}>$235.90</div>
          <div className={BalanceDescription}>Netxis Balance</div> 
        </div>

        <div className={BalanceAction}>
          <LogoutOutlined className={RotateIcon} />
          <MoneyCollectOutlined className={BalanceIcon} />
        </div>
      </div>
    </>
  )
}

export default HeaderSection;

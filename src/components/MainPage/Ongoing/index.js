import React from 'react';
import { Container, HeaderTitle } from './style';
import { Tabs } from 'antd';
import SubscriptionCard from '../../SubscriptionCard';

const { TabPane } = Tabs;
const subscriptionIds = [0, 1, 2, 3]

const Ongoing = () => {
  return (
    <>
      <div className={Container}>
        <div className={HeaderTitle}>My Subscriptions</div>
        <Tabs defaultActiveKey="1" centered size="large">
          <TabPane tab="Ongoing" key="1">
            {
                subscriptionIds.map(subscriptionId => (
                  <SubscriptionCard id={subscriptionId} />
                ))
            }
          </TabPane>
          <TabPane tab="History" key="2">
            {
                subscriptionIds.map(subscriptionId => (
                  <SubscriptionCard id={subscriptionId} />
                ))
            }
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}

export default Ongoing;

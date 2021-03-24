import React from 'react';
import { CardContainer, CardTitle, CardSubtitle, Container, HeaderTitle, SubscriptionCard } from './style';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const subscriptionIds = [0, 1, 2, 3]

const Ongoing = () => {
  return (
    <>
      <div className={Container}>
        <div className={HeaderTitle}>My Subscriptions</div>
        <Tabs defaultActiveKey="1" centered size="large">
          <TabPane tab="Ongoing" key="1">
            <img className={SubscriptionCard} src="images/power-plan.svg" alt="power-plan"/>
            <img className={SubscriptionCard} src="images/pro-plan.svg" alt="pro-plan"/>
            <img className={SubscriptionCard} src="images/kids-package.svg" alt="kids-package"/>
            {
                subscriptionIds.map(subscriptionId => (
                  <div className={CardContainer}>
                    <img className={SubscriptionCard} src={`images/plan-${subscriptionId % 3}.svg`} alt={`${subscriptionId}`}/>
                    <div className={CardTitle}>Power Plan</div>
                    <div className={CardSubtitle}>$1/hour, $49/month</div>
                  </div>                ))
            }
          </TabPane>
          <TabPane tab="History" key="2">
            <img className={SubscriptionCard} src="images/kids-package.svg" alt="kids-package"/>
            <img className={SubscriptionCard} src="images/power-plan.svg"alt="power-plan"/>
            <img className={SubscriptionCard} src="images/pro-plan.svg" alt="pro-plan"/>
            {
                subscriptionIds.map(subscriptionId => (
                  <div className={CardContainer}>
                    <img className={SubscriptionCard} src={`images/plan-${subscriptionId % 3}.svg`} alt={`${subscriptionId}`}/>
                    <div className={CardTitle}>Power Plan</div>
                    <div className={CardSubtitle}>$1/hour, $49/month</div>
                  </div>
                ))
            }
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}

export default Ongoing;

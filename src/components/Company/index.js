import React from 'react';
import { Row, Col, Tabs } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Container, HeaderTitle, ProfileContainer, CompanyLogo, CompanyName, CompanyType, ItemContainer, SubscriptionCard } from './style';
import logo from './company-logo.png';
import powerplan from './power-plan.svg';
import proplan from './pro-plan.svg';
import kidspackage from './kids-package.svg';

const { TabPane } = Tabs;

const Company = () => {
    return (
    <>
        <Row justify="center">
            <Col xs={24} md={12}>
            <div className={Container}>
                <div className={HeaderTitle}>
                    <span><ArrowLeftOutlined/></span>
                    <span>&nbsp;&nbsp;Cloudnetic Games</span>
                </div>
                <div className={ProfileContainer}>
                    <img className={CompanyLogo} src={logo} width="100%" alt="logo"/>
                    <div className={CompanyName}>Cloudnetic Games</div>
                    <div className={CompanyType}>Gaming</div>
                </div>
                <div className={ItemContainer}>
                    <Tabs defaultActiveKey="1" centered size="large">
                    <TabPane tab="Subscriptions" key="1">
                        <img className={SubscriptionCard} src={powerplan} alt="power-plan"/>
                        <a href={`/Product/1`}>
                            <img className={SubscriptionCard} src={proplan} alt="pro-plan"/>
                        </a>
                        <img className={SubscriptionCard} src={kidspackage} alt="kids-package"/>
                        {/* {
                            subscriptionIds.map(subscriptionId => (
                            <img className={SubscriptionCard} src={`images/plan-${subscriptionId % 3}.svg`} alt={`${subscriptionId}`}/>
                            ))
                        } */}
                    </TabPane>
                    <TabPane tab="Products" key="2">
                        <img className={SubscriptionCard} src={kidspackage} alt="kids-package"/>
                        <img className={SubscriptionCard} src={powerplan} alt="power-plan"/>
                        <img className={SubscriptionCard} src={proplan} alt="pro-plan"/>
                        {/* {
                            subscriptionIds.map(subscriptionId => (
                            <img className={SubscriptionCard} src={`images/plan-${subscriptionId % 3}.svg`} alt={`${subscriptionId}`}/>
                            ))
                        } */}
                    </TabPane>
                    </Tabs>
                </div>
            </div>
            </Col>
        </Row>
    </>
    )
}

export default Company;
import React from 'react';
import { Row, Col, Tabs, Skeleton } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useParams, Link, useHistory } from 'react-router-dom';
import capitalize from '../../helpers/capitalize';
import { useFetchCompanyData } from '../../helpers/apiGet';
import { Container, HeaderTitle, ProfileContainer, CompanyLogo, CompanyName, CompanyType, ItemContainer } from './style';
import SubscriptionCard from '../SubscriptionCard';
 

const { TabPane } = Tabs;
const skeleton = new Array(3).fill({});

const Company = () => {
    const { location } = useHistory();
    const { companyID } = useParams();
    const { services, company } = location;
    const { loading, response: productList } = useFetchCompanyData(companyID);

    return (
        <>
            <Row justify="center">
                <Col xs={24} md={12}>
                <div className={Container}>
                    <div className={HeaderTitle}>
                        <Link to={`/services/${services}`}><ArrowLeftOutlined/></Link>
                        <span>{company.name}</span>
                    </div>

                    <div className={ProfileContainer}>
                        <img className={CompanyLogo} src={company.logo} width="100%" alt="logo"/>
                        <div className={CompanyName}>{company.name}</div>
                        <div className={CompanyType}>{capitalize(services)}</div>
                    </div>

                    <div className={ItemContainer}>
                        <Tabs defaultActiveKey="1" centered size="large">
                            <TabPane tab="Subscriptions" key="1">
                                {!loading && (
                                    <>
                                        <Link to={{pathname: `/product/1`, company: company, services: services}}>
                                            <SubscriptionCard id="5"/>                                        
                                        </Link>
                                    </>
                                )}

                                {loading && skeleton.map((_, index) => (
                                    <Skeleton active key={index} />
                                ))}
                            </TabPane>
                            <TabPane tab="Products" key="2">
                                <SubscriptionCard id="4"/>
                                <SubscriptionCard id="5"/>
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
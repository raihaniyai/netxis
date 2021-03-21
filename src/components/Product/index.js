import React from 'react';
import { Row, Col, List, Skeleton } from 'antd';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useFetchProductData } from '../../helpers/apiGet';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { Container, HeaderTitle, Title, ProductImage, DetailsContainer, DetailsList, ButtonContainer, BuyButton, CheckStyle } from './style';
import proplan from '../Company/pro-plan.svg';

const skeleton = new Array(5).fill({});

const Product = () => {
    const { location } = useHistory();
    const { company, services } = location;
    const { productID } = useParams();
    const { loading, response: planDesc } = useFetchProductData(productID);

    return (
        <>
            <Row justify="center">
                <Col xs={24} md={12}>
                    <div className={Container}>
                        <div className={HeaderTitle}>
                            <Link to={{ pathname: company ? `/company/${company.id}` : `/`, services: services, company: company }}><ArrowLeftOutlined/></Link>
                            <span>&nbsp;&nbsp;PRO Plan</span>
                        </div>
                        <img className={ProductImage} src={proplan} alt="product"/>
                    </div>
                    <div className={DetailsContainer}>
                        <div className={Title}>Details</div>
                        {!loading && (
                            <>
                                <List
                                    className={DetailsList}
                                    dataSource={planDesc}
                                    renderItem={(plan) => (
                                    <List.Item style={{borderBottom: "0px"}}>
                                        <div>
                                            <CheckOutlined className={CheckStyle}/>
                                            <span>{plan.description}</span>
                                        </div>
                                    </List.Item>
                                    )}
                                />

                                <div className={ButtonContainer}>
                                    <div className={BuyButton}>
                                        Buy Hourly Plan ($1.50/hour)
                                    </div>
                                    <div className={BuyButton}>
                                        Buy Monthly Plan ($69/month)
                                    </div>
                                </div>
                            </>
                        )}
                        
                        {loading && skeleton.map((_, index) => (
                            <Skeleton paragraph={{ rows: 1 }} key={index} />
                        ))}
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Product;
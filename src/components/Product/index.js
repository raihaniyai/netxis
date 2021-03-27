import React, { useState } from 'react';
import { Row, Col, List, Skeleton, Modal, Input } from 'antd';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useFetchProductData } from '../../helpers/apiGet';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { Container, HeaderTitle, Title, DetailsContainer, DetailsList, ButtonContainer, BuyButton, CheckStyle, PaymentContainer, PaymentData, PromoCodeInput, TotalPayment } from './style';
import SubscriptionCard from '../SubscriptionCard';

const skeleton = new Array(5).fill({});
const { Search } = Input;

const Product = () => {
    const { location } = useHistory();
    const { company, services } = location;
    const { productID } = useParams();
    const { loading, response: planDesc } = useFetchProductData(productID);

    const [paymentPop, setPaymentPop] = useState(false);

    return (
        <>
            <Row justify="center">
                <Col xs={24} md={12}>
                    <div className={Container}>
                        <div className={HeaderTitle}>
                            <Link to={{ pathname: company ? `/company/${company.id}` : `/`, services: services, company: company }}><ArrowLeftOutlined/></Link>
                            <span>&nbsp;&nbsp;PRO Plan</span>
                        </div>
                        {/* <img className={ProductImage} src={proplan} alt="product"/> */}
                        <SubscriptionCard id="5"/>
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
                                    <div className={BuyButton} onClick={setPaymentPop}>
                                        Buy Hourly Plan ($1.50/hour)
                                    </div>
                                    <div className={BuyButton}>
                                        Buy Monthly Plan ($69/month)
                                    </div>
                                </div>

                                <Modal title="Payment Confirmation"
                                    centered
                                    visible={paymentPop}
                                    onCancel={() => setPaymentPop(false)}
                                    onOk={() => setPaymentPop(false)}
                                    okText="Purchase ($1.00)"
                                    style={{padding: "15px"}}
                                    >
                                    <SubscriptionCard id="5"/>
                                    <div className={PaymentContainer}>
                                        <div className={PaymentData}>
                                            <div>Plan name</div>
                                            <div><strong>Power Plan</strong></div>
                                        </div>
                                        <div className={PaymentData}>
                                            <div>Subscription period</div>
                                            <div><strong>1 hour(s)</strong></div>
                                        </div>
                                        <div className={PaymentData}>
                                            <div>Subscription fee</div>
                                            <div><strong>$1.50</strong></div>
                                        </div>
                                        <div className={PaymentData}>
                                            <div>Discounts</div>
                                            <div><strong>-$0.50</strong></div>
                                        </div>
                                        <div className={PromoCodeInput}>
                                            <Search placeholder="Enter promo code" />
                                        </div>
                                        <div className={TotalPayment}>
                                            <div>Total payment</div>
                                            <div style={{color: '#404EFB', fontSize:'20px'}}><strong>$1.00</strong></div>
                                        </div>
                                    </div>
                                </Modal>
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
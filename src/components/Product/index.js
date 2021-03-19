import React from 'react';
import { Row, Col, List } from 'antd';
import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { Container, HeaderTitle, Title, ProductImage, DetailsContainer, DetailsList, ButtonContainer,BuyButton } from './style';
import proplan from '../Company/pro-plan.svg';
import tick from './tick.svg';

const planDesc = [
    'Runs all games',
    '4 GB GPU VRAM and 6vCPU cores',
    'Guaranteed 8k/120FPS stream',
    'Latency <10ms',
    'Unlimited 5G gaming data',
    'Bonus with monthly plan: Play Turbo Arena II 48 hours before official release'
]

const Product = () => {
    return (
        <>
            <Row justify="center">
                <Col xs={24} md={12}>
                    <div className={Container}>
                        <div className={HeaderTitle}>
                            <span><ArrowLeftOutlined/></span>
                            <span>&nbsp;&nbsp;PRO Plan</span>
                        </div>
                        <img className={ProductImage} src={proplan}/>
                    </div>
                    <div className={DetailsContainer}>
                        <div className={Title}>Details</div>
                        <List
                            className={DetailsList}
                            dataSource={planDesc}
                            renderItem={(desc) => (
                            <List.Item style={{borderBottom: "0px"}}>
                                <CheckOutlined style={{color: "#404EFB"}}/>&nbsp;&nbsp;{desc}
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
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Product;
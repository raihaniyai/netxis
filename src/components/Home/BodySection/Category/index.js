import React from 'react';
import { Row, Col } from 'antd';
import {
  AppstoreOutlined,
  GlobalOutlined,
  ThunderboltOutlined,
  CarOutlined,
  MobileOutlined,
  BulbOutlined,
  CustomerServiceOutlined,
} from '@ant-design/icons';
import { Container, Title, Option, OptionIcon, OptionName } from './style';

const Category = () => {
  return (
    <div className={Container}>
      <div className={Title}>
        Services and plans
      </div>

      <Row gutter={[16, 16]}>
        <Col span={6} className={Option}>
          <div className={OptionIcon}><GlobalOutlined /></div>
          <div className={OptionName}>Internet</div>
        </Col>

        <Col span={6} className={Option}>
          <div className={OptionIcon}><ThunderboltOutlined /></div>
          <div className={OptionName}>Streaming</div>
        </Col>

        <Col span={6} className={Option}>
          <div className={OptionIcon}><CustomerServiceOutlined /></div>
          <div className={OptionName}>Gaming</div>
        </Col>

        <Col span={6} className={Option}>
          <div className={OptionIcon}><CarOutlined /></div>
          <div className={OptionName}>Automotive</div>
        </Col>

        <Col span={6} className={Option}>
          <div className={OptionIcon}><MobileOutlined /></div>
          <div className={OptionName}>Devices</div>
        </Col>

        <Col span={6} className={Option}>
          <div className={OptionIcon}><BulbOutlined /></div>
          <div className={OptionName}>Smart Home</div>
        </Col>

        <Col span={6} className={Option}>
          <div className={OptionIcon}><AppstoreOutlined /></div>
          <div className={OptionName}>More</div>
        </Col>
      </Row>
    </div>
  )
}

export default Category;

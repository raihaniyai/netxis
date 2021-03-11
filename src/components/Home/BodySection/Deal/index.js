import React from 'react';
import { Carousel, Popover } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { Container, Title, Header } from './style';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Deal = () => {

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div className={Container}>
      <div className={Header}>
        <div className={Title}>
          Deals for you
        </div>

        <div>
        <Popover placement="leftTop" content={content}>
          <MoreOutlined />
        </Popover>
        
        </div>
      </div>

      <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default Deal;

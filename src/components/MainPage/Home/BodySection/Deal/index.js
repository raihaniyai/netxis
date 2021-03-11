import React from 'react';
import { Popover, List } from 'antd';
import Slider from "react-slick";
import { MoreOutlined } from '@ant-design/icons';
import { Container, Title, Header } from './style';

// Soon will be removed if data is ready
const tempDeals = [1, 2, 3, 4, 5]
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
// end

const Deal = () => {
  const empty = (<></>)

  const popoverContent = (
    <List
      size="small"
      dataSource={[{text: 'Not interested', onClick: () => {}}, {text: 'Why this ad?', onClick: () => {}}]}
      renderItem={item => <List.Item onClick={item.onClick}>{item.text}</List.Item>}
    />
  );

  return (
    <div className={Container}>
      <div className={Header}>
        <div className={Title}>
          Deals for you
        </div>

        <div>
        <Popover placement="leftTop" content={popoverContent} trigger="click">
          <MoreOutlined />
        </Popover>
        
        </div>
      </div>

      <Slider dots prevArrow={empty} nextArrow={empty} infinite slidesToScroll={1}>
        {tempDeals.map(deal => (
          <div key={deal}>
            <h3 style={contentStyle}>{deal.toString()}</h3>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Deal;

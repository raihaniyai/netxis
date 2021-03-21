import React from 'react';
import { Popover, List } from 'antd';
import Slider from "react-slick";
import { MoreOutlined } from '@ant-design/icons';
import { Container, Title, Header, Thumbnail } from './style';

// Soon will be removed if data is ready
const tempDeals = [1, 2, 3, 4, 5]
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
            <img className={Thumbnail} src="images/gaming-deal.png" alt="gaming-deal"/>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Deal;

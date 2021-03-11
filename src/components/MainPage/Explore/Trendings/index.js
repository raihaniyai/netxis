import React from 'react';
import { List } from 'antd';
import { TempTrending } from './../constants';
import { Title } from './../style'
import { TrendingWrapper, ListStyle, TrendingOrder } from'./style';

const Trendings = () => {
  return (
    <>
      <div>
        <div className={Title}>Trendings</div>
      </div>

      <List
        className={ListStyle}
        dataSource={TempTrending}
        renderItem={(trending, index) => (
          <List.Item>
            <div className={TrendingWrapper}>
              <div className={TrendingOrder}>{index + 1}</div>
              <div>{trending}</div>
            </div>
          </List.Item>
        )}
      />
    </>
  )
};

export default Trendings;
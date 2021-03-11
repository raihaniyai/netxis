import React from 'react';
import { Row, Col } from 'antd';
import { Categories } from './constants';
import { Container, Title, Option, OptionIcon, OptionName } from './style';

const Category = () => {
  return (
    <div className={Container}>
      <div className={Title}>
        Services and plans
      </div>

      <Row gutter={[16, 16]}>
        {Categories.map(category => (
          <Col span={6} className={Option} key={category.title}>
            <div className={OptionIcon}>{category.icon}</div>
            <div className={OptionName}>{category.title}</div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Category;

import React from 'react';
import { Row, Col, Input } from 'antd';
import { SearchOutlined} from '@ant-design/icons';
import { CategoryList } from './constants';
import Carousel from './Carousel';
import Trendings from './Trendings';
import { Container, Title, CategoriesContainer, Category, InputStyle } from './style'

const Explore = () => {
  return (
    <div className={Container}>
      <div>
        <div>Explore!</div>
        <div className={Title}>What's New?</div>
      </div>

      <Row className={CategoriesContainer} gutter={[8, 0]} wrap={false}>
        {CategoryList.map(category => (
          <Col key={category}>
            <div className={Category}>{category}</div>
          </Col>
        ))}
      </Row>

      <Input className={InputStyle} placeholder="Search" prefix={<SearchOutlined />} bordered={false} />

      <Carousel />
      
      <Trendings />
    </div>
  )
}

export default Explore;

import React from 'react';
import { Space } from 'antd';
import Deal from './Deal';
import Category from './Category';

const BodySection = () => {
  return (
    <>
      <Category />
      <Deal />
      <Space />
    </>
  )
}

export default BodySection;

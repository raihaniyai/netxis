import React from 'react';
import HeaderSection from './HeaderSection';
import BodySection from './BodySection';
import { Container } from './style';

const user = {
  name: 'Dharmawan Santosa',
  balance: '$235.90'
};

const Home = () => {
  return (
    <>
      <div className={Container}>
        <HeaderSection user={user} />
        <BodySection />
      </div>
    </>
  )
}

export default Home;

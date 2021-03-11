import React from 'react';
import HeaderSection from './HeaderSection';
import BodySection from './BodySection';
import { Container } from './style';

const Home = () => {
  return (
    <>
      <div className={Container}>
        <HeaderSection />
        <BodySection />
      </div>
    </>
  )
}

export default Home;

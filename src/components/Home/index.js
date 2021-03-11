import React from 'react';
import HeaderSection from './HeaderSection';
import BodySection from './BodySection';
import Navbar from './../NavigationBar';
import { Container } from './style';

const Home = () => {
  return (
    <>
      <div className={Container}>
        <HeaderSection />
        <BodySection />
      </div>
      
      <Navbar />
    </>
  )
}

export default Home;

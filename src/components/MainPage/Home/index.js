import React from 'react';
import HeaderSection from './HeaderSection';
import BodySection from './BodySection';
import { Background, BackgroundContainer, Container, GachaButton, Countdown, HeaderBox} from './style';

const user = {
  name: 'Dharmawan Santosa',
  balance: '$235.90'
};

const Home = () => {
  return (
    <>
    <div className={BackgroundContainer}>
      <div className={Background}></div>
      <div className={HeaderBox}></div>
      <div className={Container}>
        <HeaderSection user={user} />
        <BodySection />
        <div className={GachaButton}>
          <div className={Countdown}> 22:58:02 </div>
          <img src="images/gacha-icon.svg" alt="gacha-icon" width="100%"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;

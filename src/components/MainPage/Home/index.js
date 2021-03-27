import React, { useState, useContext } from 'react';
import GlobalContext from './../../../contexts/GlobalContext';
import { Modal } from 'antd';
import HeaderSection from './HeaderSection';
import BodySection from './BodySection';
import { useFetchUserData } from '../../../helpers/apiGet';
import { Background, BackgroundContainer, Container, HeaderBox } from './style';
import GachaButton from './GachaButton';
import SubscriptionCard from '../../SubscriptionCard';

const Home = () => {
  const { loading, response: userData } = useFetchUserData(1);
  const { setActiveMenu } = useContext(GlobalContext);
  const [gachaPop, setGachaPop] = useState(false);

  const onClickGacha = () => {
    setGachaPop(true);
  }

  console.log(loading)

  return (
    <>
    <div className={BackgroundContainer}>
      <div className={Background}></div>
      <div className={HeaderBox}></div>
      <div className={Container}>
        <HeaderSection user={userData} loading={loading} />
        <BodySection />
        <GachaButton onClickGacha={onClickGacha}/>
        <Modal title="Daily Gacha"
          centered
          visible={gachaPop}
          onCancel={() => setGachaPop(false)}
          cancelText="Close"
          onOk={() => setActiveMenu(2)}
          okText="Go to Coupons"
          style={{padding: "15px"}}
        >
          <div style={{textAlign: 'center'}}>Congratulations! You received: </div>
          <SubscriptionCard id="5" />
        </Modal>
      </div>
    </div>
    </>
  )
}

export default Home;

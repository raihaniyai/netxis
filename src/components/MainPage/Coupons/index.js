import React from 'react';
import { Container, HeaderTitle, CouponCard, CouponDesc, Company, Expiration, Thumbnail } from './style';

const couponIds = [0, 1, 2, 3]

const Coupons = () => {
  return (
    <>
      <div className={Container}>
          <div className={HeaderTitle}>My Coupons</div>
          {
            couponIds.map(couponId => (
              <div className={CouponCard}>
                <div>
                  <img className={Thumbnail} src="images/gaming-deal.png" alt="gaming-deal"/>
                </div>
                <div className={CouponDesc}> 
                  <strong>40% OFF Online VR Gaming Experience </strong>
                  <div className={Company}>Some Gaming Company</div>
                  <div className={Expiration}>
                    19 day(s) left
                  </div>
                </div>
              </div>
            ))
          }

      </div>
    </>
  )
}

export default Coupons;

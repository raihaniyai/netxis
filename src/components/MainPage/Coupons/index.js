import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderTitle, CouponCard, CouponDesc, Company, Expiration, Thumbnail } from './style';
import { Button } from 'antd';

const couponIds = [0, 1, 2, 3]

const Coupons = () => {
  const handleCopyCode = e => {
    e.stopPropagation();
    console.log("Copiy promo")
    // copy promo code
  }

  return (
    <>
      <div className={Container}>
          <div className={HeaderTitle}>My Coupons</div>
          {
            couponIds.map(couponId => (
              <Link to={`/coupon/${couponId}`} key={couponId}>
                <div className={CouponCard}>
                  <div>
                    <img className={Thumbnail} src="images/gaming-deal.png" alt="gaming-deal"/>
                  </div>
                  <div className={CouponDesc}> 
                    <strong>40% OFF Online VR Gaming Experience </strong>
                    <div className={Company}>Some Gaming Company</div>
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", paddingTop: "3px"}}>
                      <Button type="dashed" style={{borderColor: "#404EFB", color: "#404EFB", marginTop: "2px"}} onClick={handleCopyCode}>
                        <strong>Copy promo code</strong>
                      </Button>
                      <div className={Expiration}>
                        19 day(s) left
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }

      </div>
    </>
  )
}

export default Coupons;

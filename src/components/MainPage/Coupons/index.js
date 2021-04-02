import React from 'react';
import { Container, HeaderTitle } from './style';
import { useFetchCouponData } from '../../../helpers/apiGet';
import CouponCard from '../../CouponCard';

const Coupons = () => {

  const { loading, response: couponList } = useFetchCouponData(1);

  const handleCopyCode = e => {
    e.stopPropagation();
    console.log("Copy promo")
    // copy promo code
  }

  return (
    <>
      <div className={Container}>
          <div className={HeaderTitle}>My Coupons</div>
          {
            !loading && couponList.map(coupon => (
              // <Link to={`/coupon/${couponId}`} key={couponId}>
                <CouponCard name={coupon.deal_name} company={coupon.service_name} expiry={coupon.end_date.slice(0, 10)} thumbnail={coupon.img} onCopyCode={handleCopyCode}/>
              // </Link>
            ))
          }
      </div>
    </>
  )
}

export default Coupons;

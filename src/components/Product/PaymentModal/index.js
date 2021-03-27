import React, { useCallback, useEffect, useState } from "react";
import { Modal, Input } from 'antd';
import SubscriptionCard from '../../SubscriptionCard';
import { useHistory } from 'react-router-dom';
import { usePostOrder } from '../../../helpers/apiPost';
import { PaymentContainer, PaymentData, PromoCodeInput, TotalPayment } from './../style';

const { Search } = Input;

const PaymentModal = ({ visible, setVisible, plan, duration }) => {
  const { replace } = useHistory();
  const totalPrice = plan.price;
  const [discountPrice, setDiscountPrice] = useState(0);
  const { postOrder, isSuccess, isError, loading, messageError } = usePostOrder();

  const handlePayment = useCallback(() => {
    const params = {
      userID: 1,
      planID: plan.id,
      planType: plan.durationType,
      price: totalPrice - discountPrice,
    };

    postOrder(params);
    setVisible(false);
  }, [postOrder, setVisible, plan, totalPrice, discountPrice]);

  useEffect(() => {
    if (isSuccess) {
      Modal.success({
        title: "Payment Success",
        content: "Your payment has been received",
        onOk: () => {
          replace(`/`);
        }
      });
    }

    if (isError) {
      Modal.error({
        title: "Error",
        content: messageError
      });
    }
  }, [loading, isSuccess, isError, messageError, replace])

  return (
    <Modal
      title="Payment Confirmation"
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => handlePayment()}
      okText={`Purchase ($ ${totalPrice - discountPrice})`}
      style={{ padding: "15px" }}
    >
      <SubscriptionCard id={plan.id} title={plan.name} price={plan.price} durationType={plan.durationType} />
      <div className={PaymentContainer}>
        <div className={PaymentData}>
          <div>Plan name</div>
          <div>
            <strong>{plan.name}</strong>
          </div>
        </div>

        <div className={PaymentData}>
          <div>Subscription period</div>
          <div>
            <strong>1 {duration}</strong>
          </div>
        </div>

        <div className={PaymentData}>
          <div>Subscription fee</div>
          <div>
            <strong>$ {plan.price}</strong>
          </div>
        </div>

        <div className={PaymentData}>
          <div>Discounts</div>
          <div>
            <strong>$ {discountPrice}</strong>
          </div>
        </div>

        <div className={PromoCodeInput}>
          <Search placeholder="Enter promo code" />
        </div>

        <div className={TotalPayment}>
          <div>Total payment</div>
          <div style={{ color: "#404EFB", fontSize: "20px" }}>
            <strong>$ {totalPrice - discountPrice}</strong>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentModal;

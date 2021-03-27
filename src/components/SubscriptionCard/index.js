import React from 'react';
import { CardContainer, CardSubtitle, CardTitle, Background } from './style';

const SubscriptionCard = ({ id }) => {
    return (
        <div className={CardContainer}>
            <img className={Background} src={`../../images/plan-${id % 3}.svg`} alt=""/>
            <div className={CardTitle}>Power Plan</div>
            <div className={CardSubtitle}>$1/hour, $49/month</div>
        </div>
    )
}

export default SubscriptionCard;
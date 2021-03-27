import React from 'react';
import { CardContainer, CardSubtitle, CardTitle, Background } from './style';

const SubscriptionCard = ({ id, title, price, durationType }) => {
    const subtitle = `$${price}/hour`;

    return (
        <div className={CardContainer}>
            <img className={Background} src={`../../images/plan-${id % 3}.svg`} alt=""/>
            <div className={CardTitle}>{title}</div>
            <div className={CardSubtitle}>{subtitle}</div>
        </div>
    )
}

export default SubscriptionCard;
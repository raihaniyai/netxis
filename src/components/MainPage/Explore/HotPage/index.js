import React from 'react';
import Carousel from '../Carousel';
import Trendings from '../Trendings';
import { useFetchNews } from '../../../../helpers/apiGet';

const HotPage = () => {
    const { loading, response: newsInfo } = useFetchNews('');
    return (
        <div>
            <Carousel />
            {
                !loading &&  <Trendings news={newsInfo.slice(0,5)}/>
            }
        </div>
    )
}

export default HotPage;
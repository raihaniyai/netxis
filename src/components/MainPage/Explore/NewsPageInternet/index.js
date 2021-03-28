import React from 'react';
import { useFetchNews } from '../../../../helpers/apiGet';
import NewsCard from '../NewsCard';
const NewsPage = ({ query }) => {

  const { loading, response: newsInfo } = useFetchNews(query);
  console.log('newsInfo', newsInfo);

  return (
    <div style={{paddingBottom: '120px'}}>
      {
        !loading && newsInfo.map(news => 
          (
            <NewsCard title={news.name} url={news.url} desc={news.description} date={news.datePublished.slice(0,10)}/>
          )
      )}

    </div>
  )
}

export default NewsPage;

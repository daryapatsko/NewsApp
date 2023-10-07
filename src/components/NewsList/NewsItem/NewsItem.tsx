import React from 'react'

interface INewsItem {
  author: string,
  content: string,
  description: string,
  publishedAt: string,
  source: {
    id: string,
    name: string,
  },
  title: string,
  url: string,
  urlToImage: string,
}

const NewsItem = ({item}:any) => {
  const webSiteUrl = item.url
  const webSite = webSiteUrl.split('http://').pop().split('/')[2]

  const date = item.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', " ")
  return (
    <a href="#" className='news-item'>
      <div className='news-item__box'>
        <div className="news-item__img">
          <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="news-item__content">
          <div className="news-item__source">
            <img src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${webSite}&size=16`} alt={item.source.id} />
            <span>{item.source.name}</span>
          </div>
          <div className="news-item__title">
            <h2>{item.title}</h2>
          </div>
          <p className="news-item__description">{item.description}</p>
          <div className="news-item__details">
            <p>Published At:</p>{formatTime}
          </div>
        </div>
      </div>
    </a>
  )
}

export default NewsItem

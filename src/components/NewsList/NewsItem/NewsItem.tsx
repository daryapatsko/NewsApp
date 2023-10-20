import React, { useState } from 'react'
import "./style.css"
import Modal from '../../Modal/Modal'
import { INewsItem } from '../../../interfaces'



const NewsItem:React.FC<{item:INewsItem}> = ({ item }) => {
  const webSiteUrl = item.url
  const webSite = webSiteUrl ? webSiteUrl.split('http://').pop()?.split('/')[2] : '';
  const key = item.source.name
  const date = item.publishedAt
  const formatDate = date.replace('T', ' ')
  const formatTime = formatDate.replace('Z', " ")
  const [isOpenModal, setIsOpenModal] = useState(false)
  const handleViewMoreClick = () => {
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }
  return (
    <div className='news-item' key={key}>
      <div className='news-item__box'>
        <div className="news-item__img">
          <img src={item.urlToImage} alt={item.title} />
        </div>
        <div className="news-item__content">
          <div className="news-item__source">
            <img src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${webSite}&size=16`} alt={item.source.id} />
            <a href={item.url}><span>{item.source.name}</span></a>
          </div>
          <div className="news-item__title">
            <h2>{item.title}</h2>
          </div>
          <p className="news-item__description">{item.description}</p>
          <div className="news-item__details">
            <p className='publish'>Published At:</p>
            <p className='time__publish'>{formatTime}</p>
          </div>
          <button className="news-item__view-more" onClick={handleViewMoreClick}>View More</button>
        </div>
      </div>
      {isOpenModal && (
        <Modal item={item} closeModal={closeModal}/>
      )}
    </div>
  )
}

export default NewsItem

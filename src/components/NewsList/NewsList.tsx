import React from 'react'
import "./NewsList.css"
import NewsItem from './NewsItem/NewsItem'
import { useSelector } from 'react-redux'
import { INewsItem } from '../../interfaces'
import Pagination from '../Pagination/Pagination'



const NewsList = () => {
  const newsList = useSelector(({ newsList }) => newsList)

  return (
    <>
      <div className='news-list__container'>
        <div className="news-list__content">
          {newsList.map((item: INewsItem, i: number) => (
            <NewsItem key={i} item={item} />
          ))}
        </div>
      <Pagination/>
      </div>
     
    </>

  )
}

export default NewsList

import React from 'react'
import "./NewsList.css"
import NewsItem from './NewsItem/NewsItem'
import { useSelector } from 'react-redux'

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

const NewsList = () => {
  const newsList = useSelector(({ newsList }) => newsList)
  return (
    <div className='news-grid'>
      {newsList.map((item: INewsItem, i: number) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  )
}

export default NewsList

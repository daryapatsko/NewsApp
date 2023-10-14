import React, { useState } from 'react'
import "./NewsList.css"
import NewsItem from './NewsItem/NewsItem'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { GET_NEWS } from '../../actions/actions'

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
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const [activePage, setActivePage] = useState(1)
  const category = useSelector(({ category }) => category)
  const newsList = useSelector(({ newsList }) => newsList)
  const count = useSelector(({ count }) => count)
  const pages = []
  for (let i = 1; i < count / 10; i++) {
    pages.push(i)
  }
  return (
    <>
      <div className='news-list__container'>
        <div className="news-list__content">
          {newsList.map((item: INewsItem, i: number) => (
            <NewsItem key={i} item={item} />
          ))}
        </div>

        <div className="pagination">
          {pages.map((page) => (
            <button key={page} className={`btn__pagination ${activePage === page ? "active" : ''}`} onClick={() => {
              dispatch(GET_NEWS(category, page));
              setActivePage(page)
            }
            }>{page}</button>
          ))}
        </div>
      </div>
     
    </>

  )
}

export default NewsList

import React, { useState } from 'react'
import "./style.css"
import { GET_SEARCH_NEWS } from '../../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import NewsItem from '../NewsList/NewsItem/NewsItem'
import { Link } from 'react-router-dom'
import { INewsItem } from '../../interfaces'

const Search = () => {
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const [categorySearch, setCategorySearch] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [filteredNews, setFilteredNews] = useState([])
    const searchNews = useSelector(({ searchNews }) => searchNews)

    const handleSearchChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const search = event.target.value;
        setSearchValue(search);
        const filteredArticles = searchNews.filter((news: INewsItem) => news.title.toLowerCase().includes(search.toLowerCase()));
        setFilteredNews(filteredArticles);

    }
    console.log(filteredNews)
    const handleCategoryChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(GET_SEARCH_NEWS(categorySearch));
        setCategorySearch(event.target.value)
    }

    return (
        <div className='search__container'>
            <div className="search_box">
                <div className="link__container">
                    <Link to='/general'>Back to main page...</Link>
                </div>
                <div className="search__category__container">
                    <div className="search__category">Category: </div>
                    <select className='search__box' value={categorySearch}
                        onChange={handleCategoryChange}>
                        <option value="" ></option>
                        <option value="general" >general</option>
                        <option value='business'>business</option>
                        <option value='entertainment'>entertainment</option>
                        <option value='health'>health</option>
                        <option value='science'>science</option>
                        <option value='sports'>sports</option>
                        <option value='technology'>technology</option>
                    </select>
                </div>



            </div>
            <input type="text" className="input__search" placeholder='Search by title... ' value={searchValue} onChange={handleSearchChange} />

            <div className="result__container">
                {categorySearch === "" &&
                    <div className='warning__message'>
                        <p>Please enter category...</p>
                    </div>
                }
                {filteredNews.map((news: INewsItem) => (
                    <div className="news__item">
                        <NewsItem item={news} />
                    </div>

                ))}
            </div>
        </div>


    )
}

export default Search

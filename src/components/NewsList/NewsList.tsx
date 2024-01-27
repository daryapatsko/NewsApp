import React from 'react';
import './NewsList.css';
import NewsItem from './NewsItem/NewsItem';
import { useSelector } from 'react-redux';
import { INewsItem } from '../../interfaces';



const NewsList = () => {
	const newsList = useSelector(({ newsList }) => newsList);
	const category = useSelector(({category}) => {
		const newCat = category.charAt(0).toUpperCase() + category.slice(1);
		return newCat
	})


  console.log(newsList)

	return (
		<>
			<div className="news-list__container">
				<h3 className="news-list__title">Top Headlines {category}</h3>
				<div className="news-list__content">
					{newsList.map((item: INewsItem, i: number) => (
						<NewsItem key={i} item={item} />
					))}
				</div>
        {/* <Pagination /> */}
			</div>
     
		</>
	);
};

export default NewsList;

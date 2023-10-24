import React, { useState } from 'react'
import { GET_NEWS } from '../../actions/actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import { StyledPaginationContainer,
StyledPaginationButton } from './StyledPagination'

const Pagination = () => {
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
    const theme = useSelector(({ theme }) => theme)
    const [activePage, setActivePage] = useState(1)
    const category = useSelector(({ category }) => category)
    const count = useSelector(({ count }) => count)
    const totalPages = Math.ceil(count / 10)
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const handlePrevPage = ()=>{
        if(activePage > 1) {
            const prevPage = activePage - 1;
            dispatch(GET_NEWS(category, prevPage))
            setActivePage(prevPage)
        } 
    }
    const handleNextPage = ()=>{
        if(activePage  < totalPages) {
            const nextPage = activePage + 1;
            dispatch(GET_NEWS(category, nextPage))
            setActivePage(nextPage)
        } 
    }
    return (

    <StyledPaginationContainer >
        {activePage > 1 && (
            <StyledPaginationButton theme={theme} onClick={handlePrevPage}>Previous Page</StyledPaginationButton>
        )}
        {pages.map((page) => (
            <StyledPaginationButton theme={theme} key={page} className={`${activePage === page ? "active" : ''}`} onClick={() => {
                dispatch(GET_NEWS(category, page));
                setActivePage(page)
            }
            }>{page}</StyledPaginationButton>
        ))}
        {activePage < totalPages && (
            <StyledPaginationButton theme={theme} onClick={handleNextPage}>Next Page</StyledPaginationButton>
        )}
        
    </StyledPaginationContainer>

    )
}

export default Pagination

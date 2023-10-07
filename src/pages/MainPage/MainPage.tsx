import React from 'react'
import "./style.css"
import PageTemplate from '../../components/PageTemplate/PageTemplate'
import NewsList from '../../components/NewsList/NewsList'

const MainPage = () => {
  return (
    <PageTemplate>
        <NewsList/>
      
    </PageTemplate>
  )
}

export default MainPage

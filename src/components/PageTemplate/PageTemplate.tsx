import React, {FC , ReactNode} from 'react'
import {StyledPageTemplateContainer} from './styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Loader from '../Loader/Loader'
import { useSelector } from 'react-redux'


interface IPageTemplate{
    children: ReactNode,
}
const PageTemplate:FC<IPageTemplate> = ({children}) => {
  const isLoading = useSelector(({ isLoading }) => isLoading)
  return (
    <StyledPageTemplateContainer>
      <Header/>
      {isLoading ? <Loader /> : ''}
      <main>
        {children}
      </main>
      <Footer/>
    </StyledPageTemplateContainer>
  )
}

export default PageTemplate

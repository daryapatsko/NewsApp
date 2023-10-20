import React, { FC, ReactNode } from 'react'
import { StyledPageTemplateContainer } from './styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { useSelector } from 'react-redux'


interface IPageTemplate {
  children: ReactNode,
}
const PageTemplate: FC<IPageTemplate> = ({ children }) => {
  return (
    <StyledPageTemplateContainer>
      <Header />
    
      <main>
        {children}
      </main>

      <Footer />
    </StyledPageTemplateContainer>
  )
}

export default PageTemplate

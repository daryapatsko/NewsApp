import React, { FC, ReactNode } from 'react'
import { StyledPageTemplateContainer } from './styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import SwitchTheme from './SwitchTheme/SwitchTheme'



interface IPageTemplate {
  children?: ReactNode,
}

const PageTemplate: FC<IPageTemplate> = ({ children }) => {
  const isLoading = useSelector(({ isLoading }) => isLoading)
  const theme = useSelector(({ theme }) => theme)
  return (
    <StyledPageTemplateContainer theme={theme}>
      <Header />
      <SwitchTheme/>
      <main>
        {isLoading ? (<Loader/>) : " "}
        {children}
      </main>

      <Footer />
    </StyledPageTemplateContainer>
  )
}

export default PageTemplate

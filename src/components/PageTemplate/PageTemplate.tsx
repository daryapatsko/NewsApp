import React, { FC, ReactNode } from 'react'
import { StyledPageTemplateContainer } from './styled'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import SwitchTheme from './SwitchTheme/SwitchTheme'



interface IPageTemplate {
  children?: ReactNode,
  style?: React.CSSProperties,
}

const PageTemplate: FC<IPageTemplate> = ({ children,style }) => {
  const isLoading = useSelector(({ isLoading }) => isLoading)
  const theme = useSelector(({ theme }) => theme)
  return (
    <StyledPageTemplateContainer theme={theme} style= {style}>
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

import React, { useState } from 'react'
import {
  StyledHeaderContainer,
  StyledHeaderNavBar,
  StyledHeaderNavList,
  StyledHeaderNavItem,
  StyledHeaderImgContainer,
  StyledHeaderImg,
  StyledHeaderSearchContainer,
  StyledHeaderSearch,
} from './styled'
import { useDispatch,useSelector } from 'react-redux'
import logo from "../../assets/img/logo.png"
import search from "../../assets/img/search-img.svg"
import { useLocation, useNavigate } from 'react-router-dom'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';




const links = [
  { id: 1, name: "General", value: "general" },
  { id: 2, name: "Business", value: "business" },
  { id: 3, name: "Entertainment", value: "entertainment" },
  { id: 4, name: "Health", value: "health" },
  { id: 5, name: "Science", value: "science" },
  { id: 6, name: "Sports", value: "sports" },
  { id: 7, name: "Technology", value: "technology" },
  { id: 8, name: "World", value: "world" },
  { id: 9, name: "Nation", value: "nation" },
]
const Header = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate()
  const [active, setActive] = useState(1)
  const location = useLocation()
  const activeBurger = useSelector(({ activeBurger }) => activeBurger)
  const theme = useSelector(({ theme }) => theme)


  const handleClick = (id: number, value: string) => {
    dispatch({ type: "TOGGLE_CATEGORY", payload: value })
    setActive(id)
  }


  const isSearchPage = location.pathname === "/search"
  return (
    <StyledHeaderContainer>
      <StyledHeaderImgContainer theme={theme} onClick={() => {
        dispatch({ type: "TOGGLE_CATEGORY", payload: "general" })
        navigate('/general')
      }}>
        <StyledHeaderImg src={logo} alt="logo-img" />
      </StyledHeaderImgContainer>
      <StyledHeaderNavBar>
        <StyledHeaderNavList theme={theme} className= {activeBurger ? "open" : "close"} >
          {links.map((link) => (
            !isSearchPage && (
              <StyledHeaderNavItem key={link.id} theme={theme}
                className={active === link.id ? "active" : "inactive"}
                onClick={() => {
                  handleClick(link.id, link.value)
                }}>{link.name}</StyledHeaderNavItem>
            )

          ))}
        </StyledHeaderNavList>
      </StyledHeaderNavBar>
      <StyledHeaderSearchContainer theme={theme} onClick={() => navigate('/search')}>
        <StyledHeaderSearch src={search} alt="search-img" />
      </StyledHeaderSearchContainer>
      {!isSearchPage && <BurgerMenu/>}
    </StyledHeaderContainer>
  )
}

export default Header

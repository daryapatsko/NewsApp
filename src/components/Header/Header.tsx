import React,{useState} from 'react'
import { StyledHeaderContainer,
StyledHeaderNavBar,
StyledHeaderNavList,
StyledHeaderNavItem,
StyledHeaderImgContainer,
StyledHeaderImg,
StyledHeaderSearchContainer,
StyledHeaderSearch} from './styled'
import { useDispatch } from 'react-redux'
import logo_nav from "../../assets/img/logo_nav.svg"
import search from "../../assets/img/search-img.svg"




const links = [
  {id:1, name: "General", value:"general"},
  {id:2, name: "Business", value:"business"},
  {id:3, name: "Entertainment", value:"entertainment"},
  {id:4, name: "Health", value:"health"},
  {id:5, name: "Science", value:"science"},
  {id:6, name: "Sports", value:"sports"},
  {id:7, name: "Technology", value:"technology"},
]
const Header = () => {
  const dispatch = useDispatch()
  const [active,setActive] = useState(1)
   
const handleClick = (id: number,value: string) =>{
  dispatch({ type: "TOGGLE_CATEGORY", payload: value })
  setActive(id)
}
  return (
      <StyledHeaderContainer>
        <StyledHeaderImgContainer>
          <StyledHeaderImg src={logo_nav} alt="logo-img" />
        </StyledHeaderImgContainer>
        <StyledHeaderNavBar>
            <StyledHeaderNavList>
              {links.map((link) =>(
                <StyledHeaderNavItem key={link.id} 
                className={active === link.id ? "active" : "inactive"}
                onClick={()=> {
                  handleClick(link.id, link.value)}}>{link.name}</StyledHeaderNavItem>
              ))}
            </StyledHeaderNavList>
        </StyledHeaderNavBar>
        <StyledHeaderSearchContainer>
          <StyledHeaderSearch src={search} alt="search-img"/>
        </StyledHeaderSearchContainer>
        
      </StyledHeaderContainer>
  )
}

export default Header

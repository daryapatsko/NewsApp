import React,{useState} from 'react'
import { StyledHeaderContainer,
StyledHeaderNavBar,
StyledHeaderNavList,StyledHeaderNavItem } from './styled'
import "./Header.css"
import { useDispatch } from 'react-redux'


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
      </StyledHeaderContainer>
  )
}

export default Header

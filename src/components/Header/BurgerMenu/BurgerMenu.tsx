import React, {useState, useEffect} from 'react'
import "./BurgerMenu.css"
import{ StyledHeaderBurgerContainer,
    StyledHeaderBurgerBtn,} from "./styledBurger"
import { useDispatch } from 'react-redux';


 
const BurgerMenu = () => {
    const [isOpenBurger, setIsOpenBurger] = useState(false)
    const dispatch = useDispatch()

    const setOpenedState = () =>{
        setIsOpenBurger(!isOpenBurger)
    }

    useEffect(() =>{
      document.body.style.overflow = isOpenBurger ? 'hidden' : '';
      return () =>{
        document.body.style.overflow = " ";
      }
    },[isOpenBurger])
  return (
    <div>
        <StyledHeaderBurgerContainer className= {isOpenBurger ? "open" : "close"} 
          onClick={ ()=> { dispatch({ type: "TOGGLE_BURGER_MENU",payload:!isOpenBurger})
            setOpenedState()}
          }
          >
          <StyledHeaderBurgerBtn></StyledHeaderBurgerBtn>

        </StyledHeaderBurgerContainer>
      
    </div>
  )
}

export default BurgerMenu

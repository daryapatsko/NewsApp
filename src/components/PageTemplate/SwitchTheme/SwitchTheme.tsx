import React, { useState } from 'react'
import Sun from "../../../assets/icons/sunIcon"
import Moon from "../../../assets/icons/moonIcon"
import { StyledThemeContainer,
StyledThemeCheckboxContainer,
StyledThemeCheckboxInput,
StyledThemeCheckboxSpan } from './styledSwitchTheme'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';


const SwitchTheme = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const [isLight, setIsLight] = useState(true)

const handleClickTheme = () =>{
  const theme = isLight ? 'dark' : 'light';
  dispatch({ type: "TOGGLE_THEME", payload: theme })
  setIsLight(!isLight)  
}
  return (
    <StyledThemeContainer>
      <Sun/>
      <StyledThemeCheckboxContainer>
        <StyledThemeCheckboxInput type="checkbox" 
        onClick={handleClickTheme}
        />
        <StyledThemeCheckboxSpan/>
      </StyledThemeCheckboxContainer>
      <Moon/>
    </StyledThemeContainer>
  )
}

export default SwitchTheme

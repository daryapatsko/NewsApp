import React, { useState } from 'react'
import Sun from "../../../assets/icons/sunIcon"
import Moon from "../../../assets/icons/moonIcon"
import { StyledThemeContainer,
  StyledThemeButton
 } from './styledSwitchTheme'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';


const SwitchTheme = () => {
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const [isLight, setIsLight] = useState(true)
  const theme = useSelector(({ theme }) => theme)


const handleClickLight = () => {
  if (!isLight) {
    dispatch({ type: "TOGGLE_THEME", payload: 'light' });
    setIsLight(true);
  }
};
const handleClickDark = () => {
  if (isLight) {
    dispatch({ type: "TOGGLE_THEME", payload: 'dark' });
    setIsLight(false);
  }
};

  return (
    <StyledThemeContainer theme={theme}>
      <StyledThemeButton  theme={theme} onClick={handleClickLight}><Sun theme={theme}/></StyledThemeButton>
      <StyledThemeButton  theme={theme} onClick={handleClickDark}><Moon theme={theme}/></StyledThemeButton>
    </StyledThemeContainer>
  )
}

export default SwitchTheme

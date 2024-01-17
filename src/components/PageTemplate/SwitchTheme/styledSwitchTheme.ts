import styled from "styled-components";

export const StyledThemeContainer = styled.div<{theme: 'light' | 'dark'}>`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:10px;
padding:10px;
background-color: ${({theme}) => theme === 'light' ? '#bcaaa4' : '#5d4037'};
border-radius:10px;
max-width:80px;
`

export const StyledThemeButton = styled.button<{theme: 'light' | 'dark'}>`
border:none;
background-color: ${({theme}) => theme === 'light' ? '#bcaaa4' : '#5d4037'};
`


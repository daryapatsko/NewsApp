import styled from "styled-components";

export const StyledPageTemplateContainer = styled.div<{theme: 'light' | 'dark'}>`
padding:0 20px;
height:100vh;
display:flex;
flex-direction:column;
justify-content:space-between;
background-color: ${({theme}) => theme === 'light' ? '#fff' : '#000000'};
`
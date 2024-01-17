import styled from "styled-components";

export const StyledPaginationContainer= styled.div`
padding: 10px;
display:flex;
justify-content:space-between;
`
export const StyledPaginationButton= styled.button<{theme: 'light' | 'dark'}>`
margin: 5px;
padding: 8px;
border: none;
border-radius: 5px;
color: ${({theme}) => theme === 'light' ? '#black' : '#efebe9'};
background-color: ${({theme}) => theme === 'light' ? '#8d6e63' : '#3e2723'};
cursor: pointer;
border-radius: 10px;
transition: all ease-in-out 0.3s;
&:hover{
    background-color:${({theme}) => theme === 'light' ? '#efebe9' : '#a1887f'};
}
&.active{
    background-color: ${({theme}) => theme === 'light' ? '#a1887f' : '#6d4c41'};
    font-weight: 700;
}
`

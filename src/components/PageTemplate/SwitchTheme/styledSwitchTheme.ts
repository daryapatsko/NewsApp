import styled from "styled-components";

export const StyledThemeContainer = styled.div`
display:flex;
align-items:center;
margin-top:10px;
padding:10px;
background-color: #f5f5f5;
border-radius:10px;
max-width:150px;
`
export const StyledThemeCheckboxContainer = styled.label`
position:relative;
display:inline-block;
width:50px;
height:25px;
margin:0 0.75rem;
& input[type='checkbox']{
    display:none;
}
`
export const StyledThemeCheckboxSpan = styled.span`
position:absolute;
cursor:pointer;
background-color: #b6b6b6;
border-radius:25px;
top:0;
right:0;
bottom:0;
left:0;
transition: all 0.2s ease;
&::before{
    position:absolute;
    content:"";
    left:2px;
    top:2px;
    width:21px;
    height:21px;
    background-color: #333;
    border-radius:50%;
    transition: all 0.3s ease-in-out;
}
`
export const StyledThemeCheckboxInput = styled.input`
&:checked + ${StyledThemeCheckboxSpan}::before{
    transform: translateX(25px);
  background-color: #333;
}
&:checked + ${StyledThemeCheckboxSpan}{
  background-color:#2bc6ff;
}
`

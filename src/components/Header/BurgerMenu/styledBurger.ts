import styled from "styled-components"

export const StyledHeaderBurgerContainer = styled.div`
cursor:pointer;
margin-left:10px;
position:relative;
top:0;
right:0;
display:none;
justify-content:center;
align-items:center;
width:40px;
height:40px;
transition: all 0.3s ease-in-out;
border: none;

@media screen and (max-width: 768px) {
   display: flex;
 }

`
export const StyledHeaderBurgerBtn = styled.div`

width:40px;
height:3px;
background:#795548;
border-radius:10px;
transition: all 0.3s ease-in-out;

&:before{
content:'';
position:absolute;
left:0;
right:0;
margin-left:auto;
margin-right:auto;
width:40px;
height:4px;
border-radius:10px;
background-color:#795548;
transform:translateY(-14px);
transition: all 0.3s ease-in-out;

}
&:after{
   content:'';
   position:absolute;
   left:0;
   right:0;
   margin-left:auto;
   margin-right:auto;
   width:40px;
   height:4px;
   border-radius:10px;
   background-color:#795548;
   transform:translateY(14px);
   transition: all 0.3s ease-in-out;
}
${StyledHeaderBurgerContainer}.open & {
   transform: translateX(-50px);
   background:transparent;
}
${StyledHeaderBurgerContainer}.open &:before {
   transform: rotate(45deg) translate(35px,-35px);
}
${StyledHeaderBurgerContainer}.open &:after {
   transform: rotate(-45deg) translate(35px,35px);
}

`
import styled from "styled-components";


export const StyledModalContainer = styled.div`
width:100%;
height:100vh;
position:fixed;
z-index:0;
top:0;
left:0;
background-color:rgba(0, 0, 0, 0.9);
overflow-y: scroll;

`
export const StyledModalBox= styled.div`
position:fixed;
top:50%;
left:50%;
transform: translate(-50%, -50%);
@media (max-width: 769px) {
    top:0;
    left:0;
    width: 100%;
    transform: none;
  }
`
export const StyledModal= styled.div`
display:flex;
flex-direction:column;
padding:20px;
color:#fff;
z-index:5;
border-radius:10px;
background-color:#00B4D9;

`
export const StyledModalImgBox= styled.img`
width:100%;
`
export const StyledModalLink= styled.span`
color:black;
padding:10px 0;
&:hover{
   text-decoration:underline;
}
`
export const StyledModalTitle= styled.h2`
text-align:justify;
`
export const StyledModalDescription= styled.p`
text-align:justify;
padding:10px 0;
`
export const StyledModalBtnClose= styled.button`
border:none;
padding:10px;
display:block;
border: 2px solid #FFF;
border-radius:10px;
cursor:pointer;
max-width:70px;
margin:0 auto;
transition: all 0.5s ease-in-out;
&:hover{
    background-color:#92DFEC;
}

`
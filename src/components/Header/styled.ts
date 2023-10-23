import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
margin-top:10px;
max-height:70px;
text-align:center;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
@media screen and (max-width: 850px){
    font-size:12px;
}

`
export const StyledHeaderImgContainer = styled.div<{theme: 'light' | 'dark'}>`
padding:10px;
cursor:pointer;
max-width:80px;
border-radius:${({theme}) => theme === 'light' ? 'none' : '30%'};
background-color: ${({theme}) => theme === 'light' ? 'none' : '#fff'};

`
export const StyledHeaderImg = styled.img`
object-fit:cover;
width:100%;

`

export const StyledHeaderNavBar = styled.nav`
width:100%;
display:flex;
justify-content:center;
align-items: center;
`
export const StyledHeaderNavList = styled.ul`
padding:20px;
list-style:none;
display:flex;
transition:all 0.5s ease-in-out;
@media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
    justify-content:center;
    position:fixed;
    left:-100%;
    right:0;
    top:0;
    bottom:0;
    width:100%;
    height:100vh;
    background-color:#fff;
    
    &.open{
        left:0;
    }
  }
`

export const StyledHeaderNavItem = styled.li<{theme: 'light' | 'dark'}>`
padding:10px;
cursor:pointer;
margin:5px;
border-radius:2em;
background-color:${({theme}) => theme === 'light' ? '#8e6635' : 'grey'};
transition: all 0.3s;
color: ${({theme}) => theme === 'light' ? '#000000' : '#fff'};
&:hover{
    background-color: ${({theme}) => theme === 'light' ? '#caa06c' : '#432602'};
}
}
&.active{
    background-color: #dfcece;
}
&.inactive:hover{
    background: ${({theme}) => theme === 'light' ? '#eee' : '#34210a'};
}
`
export const StyledHeaderSearchContainer = styled.div<{theme: 'light' | 'dark'}>`
object-fit:cover;
padding:5px;
border-radius:10px;
background-color: ${({theme}) => theme === 'light' ? '' : '#dfcece'};
&:hover{
    background-color: ${({theme}) => theme === 'light' ? '#dfcece' : '#432602'};
   
}
@media screen and (max-width: 768px) {
    width:100%;
   }
`
export const StyledHeaderSearch = styled.img`
cursor:pointer;
`


import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
width:100%;
max-height:70px;
text-align:center;
width:100%;
display:flex;
justify-content:space-between;
align-items:center;

`
export const StyledHeaderImgContainer = styled.div`
padding:10px;
cursor:pointer;
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
font-family:'Nunito Sans', sans-serif;
`

export const StyledHeaderNavItem = styled.li`
padding:10px;
cursor:pointer;
margin:5px;
border-radius:2em;
background: #eee;
transition: all 0.3s;
&:hover{
    font-weight: 700;
}
&.active{
    background-color: #dfcece;
    font-weight: 700;
}
&.inactive:hover{
    background:#dddddd;
}
`
export const StyledHeaderSearchContainer = styled.div`
object-fit:cover;
`
export const StyledHeaderSearch = styled.img`
cursor:pointer;
margin-left:20px;
`
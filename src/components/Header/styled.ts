import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
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
`

export const StyledHeaderNavItem = styled.li`
padding:10px;
cursor:pointer;
margin:5px;
border-radius:2em;
background: #eee;
transition: all 0.3s;
&:hover{
    background-color: grey;
}
}
&.active{
    background-color: #dfcece;
}
&.inactive:hover{
    background:#dddddd;
}
`
export const StyledHeaderSearchContainer = styled.div`
object-fit:cover;
padding:5px;
&:hover{
    background-color: #dfcece;
    border-radius:10px;
}
`
export const StyledHeaderSearch = styled.img`
cursor:pointer;
`
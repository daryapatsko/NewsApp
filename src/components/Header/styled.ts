import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
width:100%;
height:70px;

`

export const StyledHeaderNavBar = styled.nav`
width:100%;
display:flex;
`
export const StyledHeaderNavList = styled.ul`
padding:20px;
list-style:none;
display:flex;
`

export const StyledHeaderNavItem = styled.li`
padding:20px;
cursor:pointer;
&:hover{
    color:red;
}

`
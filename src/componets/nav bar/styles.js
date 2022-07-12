import styled from 'styled-components';

const NavBarContainer = styled.nav`
    width:100%;
    padding:40px 0 40px 670px;
`
const ListNavBar = styled.ul`
    display: flex;
    list-style: none;
`
const Li = styled.li`
    border:3px solid rgb(255, 172, 45, 0);
    margin:0 5px;
    padding:0 30px;
    display:flex;
    justify-content:center;
    &:hover{
    border:3px solid #FFAC2D;
    border-radius: 50px;
    }
`
const A = styled.a`
    color:white;
    font-size:25px;
    font-weight:400;
    text-align: center;
    text-decoration:none;
`
export {NavBarContainer,ListNavBar,Li,A}
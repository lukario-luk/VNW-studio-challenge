import styled from 'styled-components';

const HeaderContainer = styled.header`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-image:url(${({backgroundImage})=>backgroundImage});
    background-repeat:no-repeat;
    background-size:100%;
    height:1080px;
    opacity:1;
`
const VNWLogo = styled.img`
    width:77.8px;
    position:fixed;
    top:28px;
    left:66px;
`
const Title1 =styled.h1`
    width:1490px;
    margin:0 0 28px 0;
    color:#FFAC2D;
    font-size:65px;
    letter-spacing: 0;
    line-height: 101px;
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:800;
    &::before{
        content:'// ';
        color:#FF611E;
        font-weight:200;
    }
`
const HeaderSection = styled.section`
    padding:134px 0 0;
    
`
export {HeaderContainer,VNWLogo,Title1,HeaderSection}

import styled from 'styled-components';

const CardContainer =styled.div`
    font-family: 'Montserrat', sans-serif,Arial;
    letter-spacing: 0;
`
const CardContent = styled.div`
    width:881px;
    border-radius:20px;
    padding:19px 0 39px 25px;
    background-color:#fff;
`
const CardTitle = styled.h2`
    padding:25.65px 0 21px;
    color:#00145D;
    font-size:58px;
    line-height: 89px;
`
const ContentP =styled.p`
    color:#272727;
    font-size:36px;
`
const CirclesBox =styled.div`
    display:flex;
`
const SmallCircle = styled.div`
    width:16px;
    height:17px;
    margin:0 7px 0 0;
    border-radius:50px;
    background-color:#00145D;
`
const Line = styled.hr`
    width:780.34px;
    margin:22.35px 0 0 0;
    border: 3.5px solid #00145D;
    border-radius:50px;
    background-color:#00145D;
`
const SubContentP = styled.p`
    color:#FED5B2;
    padding:12px 0 0 0;
    font-size:30px;
    font-weight:600;
`
const ALink = styled.a`
    color:#FED5B2;
    font-size:30px;
    font-weight:400;
    text-decoration:none;
`
export {CardContainer,CardContent,CardTitle,ContentP,CirclesBox,SmallCircle,Line,SubContentP,ALink}
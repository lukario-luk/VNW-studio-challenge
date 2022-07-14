import styled from 'styled-components';

const FooterContainer = styled.footer`
  width:100%;
  min-height:529px;
  padding:65px 0 184px 215px;
  background-image: url(${({BgImg})=>BgImg});
  background-repeat:no-repeat;
  background-size:100%;
`

const TItleFooter = styled.div`
    margin:0 0 125px 0;
    color:#fff;
    font-size:${({TitleSize})=>TitleSize};
    letter-spacing: 0;
    line-height: ${({LineHeighText})=>LineHeighText};
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:800;
`
const ParagraphFooter = styled.div`
    width:268px;
    margin:0 34px 0 0;
    color:#fff;
    font-size:${({TextSize})=>TextSize};
    font-weight:600;
    font-family: 'Montserrat', sans-serif,Arial;
`
const UlContacts = styled.ul`
    width:100%;
    display:flex;
    list-style:none;
`
const IconContactImg = styled.img`
    width:74px;
    margin:0 42px 0 0;
`
export {FooterContainer,TItleFooter,ParagraphFooter,UlContacts,IconContactImg}

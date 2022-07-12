import styled from 'styled-components';

const Container = styled.div`
  width:359px;
  height:364px;
  margin:17px 17px 0 0;
  display:flex;
  justify-content:center;
  position:relative;
`
const ImgMamber= styled.img`
    width:100%;
`
const NameMamber = styled.h4`
    position:absolute;
    bottom:46px;
    color: #FFFFFF;
    font-size:${({NameSize})=>NameSize};
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:${({NameFontWeight})=>NameFontWeight};
`
const OfficeMamber =styled.h5`
    position:absolute;
    bottom:18px;
    color: #FFFFFF;
    font-size:${({OfficeSize})=>OfficeSize};
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:${({OfficeFontWeight})=>OfficeFontWeight};
`

export {Container,ImgMamber,NameMamber,OfficeMamber}
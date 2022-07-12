import styled from "styled-components";

const TextCardContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:${({AlignImage})=>AlignImage};
`
const Figure =styled.figure`
    margin:${({MarginImg})=>MarginImg};
`
const ImageCard = styled.img`
    width:${({WidthImg})=>WidthImg};
`
const CardTitle = styled.h3`
    color: #0F2260;
    font-size:${({TitleSize})=>TitleSize};
    letter-spacing: 0;
    line-height: ${({LineHeighTitle})=>LineHeighTitle};
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:${({FontWeight})=>FontWeight};
`
const TextCardP = styled.div`
    width:100%;
    padding:${({PSpacing})=>PSpacing};
    font-size:${({TextSize})=>TextSize};
    letter-spacing: 0;
    line-break: auto;
    white-space: pre-wrap;
    line-height: ${({LineHeighText})=>LineHeighText};
    line-clamp:100px;
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:${({FontWeight})=>FontWeight};
`

export {TextCardContainer,CardTitle,ImageCard,TextCardP,Figure}
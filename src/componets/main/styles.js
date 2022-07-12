import styled from "styled-components";

const Section = styled.section`
    width:100%;
    padding:${({Padding})=>Padding};
    display:flex;
`
const SectionTitle = styled.h3`
    margin:${({Margin})=>Margin};
    color: #0F2260;
    font-size:${({TitleSize})=>TitleSize};
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:${({FontWeight})=>FontWeight};
`
const ImgSection = styled.img`
    width:${({Width})=>Width};
    margin:${({Margin})=>Margin};
`
export {Section,SectionTitle,ImgSection}
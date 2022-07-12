import styled from "styled-components";

const Section = styled.section`
    width:100%;
    padding:${({Padding})=>Padding};
`
const SectionTitle = styled.h3`
    color: #0F2260;
    font-size:${({TitleSize})=>TitleSize};
    font-family: 'Montserrat', sans-serif,Arial;
    font-weight:${({FontWeight})=>FontWeight};
`
export {Section,SectionTitle}
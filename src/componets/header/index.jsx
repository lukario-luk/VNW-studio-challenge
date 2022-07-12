import React from 'react';
import BackgrandVNWColors from "../../assets/image/blurred_colorful_background.png"
import LogoVNW from '../../assets/image/logo_vai_na_web.svg'
import {HeaderContainer,VNWLogo,Title1,HeaderSection} from "./styles"
import InfoCard from '../info card';
import NavBar from '../nav bar';



export default function header() {
  return (
    <>
    <HeaderContainer backgroundImage={BackgrandVNWColors}>
        <VNWLogo src={LogoVNW} alt=" logo do vai na web"/>
        <NavBar/>
        <HeaderSection>
            <Title1>Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</Title1>
            <InfoCard/>
        </HeaderSection>
    </HeaderContainer>  
    </> 
  );
}
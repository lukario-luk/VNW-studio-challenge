import React from 'react';
import BackgrandVNWColors from "../../assets/image/blurred_colorful_background.png"
import LogoVNW from '../../assets/image/logo_vai_na_web.svg'
import * as S from "./styles"
import InfoCard from '../info card';
import NavBar from '../nav bar';
 const Header = ()=> {
  return (
    <>
    <S.HeaderContainer backgroundImage={BackgrandVNWColors}>
        <a href='#TopPage'><S.VNWLogo src={LogoVNW} alt=" logo do vai na web"/></a>
        <NavBar/>
        <S.HeaderSection>
            <S.Title1>Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?</S.Title1>
            <InfoCard/>
        </S.HeaderSection>
    </S.HeaderContainer>  
    </> 
  );
}
export default Header
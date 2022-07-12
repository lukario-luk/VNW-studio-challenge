import React from 'react';
import TextCard from '../text card';
import VNWLogo from '../../assets/image/logo_vai_na_web.svg'
import * as S from "./styles"
const main =()=> {
  return (
  <>
    <main>
      <S.Section id='Aboult' Padding={"108px 62px 110px 35px"}>
        <TextCard
          AlignImage={"center"}
          MarginImg={"182px"}
          WidthImg={"502px"}
          Image={VNWLogo}
          ImgDescription={"logo do vai na web"}
          TitleSize={"52px"}
          LineHeighTile={"64px"}
          PSpacing={"10px"}
          TextSize={"24.5px"}
          LineHeighText={"40px"}
        />
      </S.Section>
      <S.Section>
        <S.SectionTitle 
        TitleSize={"58px"}
        FontWeight={"800"}
         >
          Formação</S.SectionTitle>
          <TextCard
            
          />
      </S.Section>
    </main>

  {/* <FormationSection id='Formation'>
    formação
  </FormationSection>
  <TeamSection id='Team'>
    time
  </TeamSection>
  <EventsSection id='Events'>
    eventos
  </EventsSection> */}
  </>
    );
}

export default main;
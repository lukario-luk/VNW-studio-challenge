import React from 'react';
import TextCard from '../text card';
import MemberSearch from '../member search'
import VNWLogo from '../../assets/image/logo_vai_na_web.svg'
import virtualDocumentInCircle from "../../assets/image/transparent_virtual_document_icon_in_a_circle.svg"
import Code3D from "../../assets/image/3d_code.png"
import TechGirls from "../../assets/image/Event_Tech-Girls.png"
import * as S from "./styles"
const main =()=> {
  const ParagraphsOfAboutVNW = [
    "Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil.",
    "Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.",
    "Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”."
  ]
  const ParagraphOfFormation = [
    {
      id:1,
      image:virtualDocumentInCircle,
      imgDescript:"imagem de um design em azul escuro de um documento na frente de uma Monitor em um circulo com uma cor creme e com bordas tracejadas em creme um pouco mais escuro.",
      title:"FRONT-END",
      text:["Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript."]},
    {
      id:2,
      image:virtualDocumentInCircle,
      imgDescript:"imagem de um design em azul escuro de um documento na frente de uma Monitor em um circulo com uma cor creme e com bordas tracejadas em creme um pouco mais escuro.",
      title:"BACK-END",
    text:["O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo)."]},
    ]
  const ParagraphOfTechGirls= [
    "Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo."
  ]
    const MapTextCardSFormation = () =>{
      return(
        ParagraphOfFormation.map(item=>(
          <TextCard
          key={item.id}
          AlignImage={"flex-start"}
          MarginImg={"0 60px 0 0"}
          WidthImg={"120px"}
          Image={item.image}
          ImgDescription={item.imgDescript}
          CardName={item.title}
          TitleSize={"31px"}
          LineHeighTile={"64px"}
          FontWeightTile={"600"}
          PSpacing={"0 0 10px 0"}
          TextSize={"19.5px"}
          LineHeighText={"26px"}
          MapArrayP={item.text}
        />
        ))
      )
    }
  return (
  <>
    <main>
      <S.Section 
        id='Aboult' 
        Padding={"108px 62px 110px 35px"}>
        <TextCard
          AlignImage={"center"}
          MarginImg={"182px"}
          WidthImg={"502px"}
          Image={VNWLogo}
          ImgDescription={"logo do vai na web"}
          CardName={"Sobre o Vai na Web"}
          TitleSize={"52px"}
          LineHeighTile={"64px"}
          FontWeightTile={"800"}
          PSpacing={"10px"}
          TextSize={"24.5px"}
          LineHeighText={"40px"}
          MapArrayP={ParagraphsOfAboutVNW}
        />
      </S.Section>

      <S.Section 
      id='Formation'
      Padding={"66px 0 16px 208px"}
      >
        <div>
        <S.SectionTitle 
          Margin={"44px 0 33px 0"}
         >
          Formação
        </S.SectionTitle>
          {MapTextCardSFormation()}
          </div>
          <figure>
            <S.ImgSection Margin={"0 0 0 182px"} width={"948px"} src={Code3D} alt="sei la"/>
          </figure>
      </S.Section>

      <S.Section
        id='Team'
        Padding={"228px 213px 151px 203px"}
        DirectionBox={"column"}
          >
        <S.SectionTitle 
          Margin={"0 0 43px 0"}
         >
          Equipe
        </S.SectionTitle>
        <MemberSearch/>
      </S.Section>

      <S.Section 
      id="Events"
      Padding={"0 129px 261px 66px "}
      DirectionBox={"column"}
      >
        <S.SectionTitle
        Margin={"0 0 0 149px"}
        >Eventos</S.SectionTitle>
        <TextCard
          AlignImage={"center"}
          MarginImg={"0 -78px 0 0"}
          WidthImg={"1425px"}
          Image={TechGirls}
          ImgDescription={"logo do vai na web"}
          CardName={"Tech Girls"}
          TitleSize={"40px"}
          LineHeighTile={"54px"}
          FontWeightTile={"600"}
          PSpacing={"10px"}
          TextSize={"19.5px"}
          LineHeighText={"26px"}
          MapArrayP={ParagraphOfTechGirls}
        />

      </S.Section>
    </main>
  </>
    );
}

export default main;
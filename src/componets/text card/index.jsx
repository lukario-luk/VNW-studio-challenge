import React from 'react';
import * as S from './styles'

function TextCard({AlignImage,MarginImg,WidthImg,Image,ImgDescription,TitleSize,LineHeighTile,MapParagraphArray, PSpacing, TextSize,LineHeighText,Children}){
  return (
    <>
      <S.TextCardContainer AlignImage={AlignImage}>
        <S.Figure MarginImg={MarginImg}>
          <S.ImageCard WidthImg={WidthImg} src={Image} alt={ImgDescription}/>
        </S.Figure>
        <div>
          <S.CardTitle
          TitleSize={TitleSize} 
          LineHeighTile={LineHeighTile} 
          FontWeight={"800"}
          >
            Sobre o Vai na Web
          </S.CardTitle>
          {MapParagraphArray.map(item=>(

          <S.TextCardP 
          PSpacing={PSpacing} 
          TextSize={TextSize} 
          LineHeighText={LineHeighText}
          FontWeight={"500"}
          >
            {item.Children}
          </S.TextCardP>
          ))}

          <S.TextCardP 
          PSpacing={PSpacing} 
          TextSize={TextSize} 
          LineHeighText={LineHeighText}
          FontWeight={"500"}
          >
            Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e transformando a vida de jovens das classes C, D e E do Rio de Janeiro e de outros 18 estados do Brasil.</S.TextCardP>
          <S.TextCardP 
          PSpacing={PSpacing} 
          TextSize={TextSize} 
          LineHeighText={LineHeighText}
          FontWeight={"500"}
          >
            Muito mais do que compartilhar conhecimento de programação front-end, o programa oferece aulas de inglês e desenvolvimento de habilidades humanas e socioemocionais, que preparam os futuros desenvolvedores para o mundo do trabalho e oferecem um espaço em que é possível descobrir a riqueza de áreas que a tecnologia tem.</S.TextCardP>
          <S.TextCardP 
          PSpacing={PSpacing} 
          TextSize={TextSize} 
          LineHeighText={LineHeighText}
          FontWeight={"500"}
          >
            Com o objetivo de acentuar a potência mundial que é a juventude, o Vai na Web tem se tornado cada vez mais um lugar de transformação. Através da cultura do afeto, a equipe do programa entende que “educar não é impor informação, é trocar” e sua maior riqueza, segundo a coordenadora executiva, Cris dos Prazeres, “é respeitar a geração da juventude que está nesse processo de compartilhar”.</S.TextCardP>
        </div>
      </S.TextCardContainer>
    </>
  );
}

export default TextCard;
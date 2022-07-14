import React from 'react';
import * as S from './styles'

const TextCard=({AlignImage,MarginImg,WidthImg,Image,ImgDescription,CardName, TitleSize,LineHeighTile, PSpacing, TextSize,LineHeighText,MapArrayP})=>{
  
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
            {CardName}
          </S.CardTitle>
          {MapArrayP.map(item=>(

          <S.TextCardP 
          key={item}
          PSpacing={PSpacing} 
          TextSize={TextSize} 
          LineHeighText={LineHeighText}
          FontWeight={"500"}
          >
            {item}
          </S.TextCardP>
          ))}
        </div>
      </S.TextCardContainer>
    </>
  );
}

export default TextCard;
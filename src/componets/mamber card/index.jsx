import React from 'react';
import * as S from './styles'
const MamberCard=({Name,Office,Img})=>{
  return (
  <>
    <S.Container >
      <S.ImgMamber src={Img}/>
      <S.NameMamber NameSize={"26px"} NameFontWeight={"600"} >{Name}</S.NameMamber>
      <S.OfficeMamber OfficeSize={"18px"} OfficeFontWeight={"500"}>{Office}</S.OfficeMamber>
    </S.Container>
  </>
    );
}

export default MamberCard;

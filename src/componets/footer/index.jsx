import React from 'react';
import * as S from './styeles'
import FooterBgImg from '../../assets/image/Earth_seen_from_space.png'
import Contact1 from '../../assets/image/contacts icon/facebook.svg'
import Contact2 from '../../assets/image/contacts icon/instagram.svg'
import Contact3 from '../../assets/image/contacts icon/linkedin.svg'
import Contact4 from '../../assets/image/contacts icon/medium.svg'
import Contact5 from '../../assets/image/contacts icon/youtube.svg'

const Footer=()=> {
    const listContactsImg=[
        {id:1,img:Contact1, imgDescription:"Icone da rede social facebook",},
        {id:2,img:Contact2, imgDescription:"Icone da rede social instagram",},
        {id:3,img:Contact3, imgDescription:"Icone da rede social linkedin",},
        {id:4,img:Contact4, imgDescription:"Icone da rede social medium",},
        {id:5,img:Contact5, imgDescription:"Icone da rede social youtube",},
    ]
    const MapImg = ()=>{
        return(listContactsImg.map(item => 
            <li><S.IconContactImg key={item.id} src={item.img} alt={item.imgDescription} /></li>
            ))
    }

  return (
  <>
  <S.FooterContainer id="contacts" BgImg={FooterBgImg}>
    <S.TItleFooter
    TitleSize={"58px"}
    >Contato</S.TItleFooter>
    <S.UlContacts>
        <S.ParagraphFooter TextSize ={"20px"}>Siga nossas redes sociais e fique conectado com todas as novidades.</S.ParagraphFooter>
        {MapImg()}
    </S.UlContacts>
  </S.FooterContainer>
  </>
    );
}

export default Footer;
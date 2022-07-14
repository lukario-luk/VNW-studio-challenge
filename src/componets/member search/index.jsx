import React, { useState } from 'react';
import * as S from './styles';
import MemberCard from '../mamber card'
import MagnifyingGlass from '../../assets/image/magnifying_glass.svg'
import Photo1 from '../../assets/image/team-member-photos/photo1.jpg'
import Photo2 from '../../assets/image/team-member-photos/photo2.jpg'
import Photo3 from '../../assets/image/team-member-photos/photo3.jpg'
import Photo4 from '../../assets/image/team-member-photos/photo4.jpg'
import Photo5 from '../../assets/image/team-member-photos/photo5.jpg'
import Photo6 from '../../assets/image/team-member-photos/photo6.jpg'
import Photo7 from '../../assets/image/team-member-photos/photo7.jpg'
import Photo8 from '../../assets/image/team-member-photos/photo8.jpg'
import Photo9 from '../../assets/image/team-member-photos/photo9.jpg'
import Photo10 from '../../assets/image/team-member-photos/photo10.jpg'
import Photo11 from '../../assets/image/team-member-photos/photo11.jpg'
import Photo12 from '../../assets/image/team-member-photos/photo12.jpg'
import Photo13 from '../../assets/image/team-member-photos/photo13.jpg'
import Photo14 from '../../assets/image/team-member-photos/photo14.jpg'
import Photo15 from '../../assets/image/team-member-photos/photo15.jpg'

const MemberSearch=()=>{
  const [input, setInput]= useState("")
  const ListMembers = [
    {id:1, img:Photo1, name:"Aline Fróes", office:"#CEO",},
    {id:2, img:Photo2, name:"Dimitri Duque", office:"#voluntários",},
    {id:3, img:Photo3, name:"Luzia Merlim", office:"#Agente Socioemocional",},
    {id:4, img:Photo4, name:"Paula Misan", office:"#voluntários",},
    {id:5, img:Photo5, name:"Aline Nogueira", office:"#Agente Socioemocional",},
    {id:6, img:Photo6, name:"Hugo Sabino", office:"#voluntários",},
    {id:7, img:Photo7, name:"Mariana Correia", office:"#Coordenadora Administrativa",},
    {id:8, img:Photo8, name:"Priscila Tufani", office:"#Agente de Estratégia",},
    {id:9, img:Photo9, name:"Andrea Marinho", office:"#Psicóloga",},
    {id:10, img:Photo10, name:"Karla De Melo", office:"#voluntários",},
    {id:11, img:Photo11, name:"Marina Tiago", office:"#Agente Socioemocional",},
    {id:12, img:Photo12, name:"Thais Brait", office:"#voluntários",},
    {id:13, img:Photo13, name:"Cris Dos Prazeres", office:"#Coordenadora Executiva",},
    {id:14, img:Photo14, name:"Karynne Moreira", office:"#Facilitadora Técnica",},
    {id:15, img:Photo15, name:"Marlon Yuri", office:"#Instrutor Técnico",},
  ] 

  const SearchMembers=()=>{
    return ListMembers.filter(item=> item.name.toLowerCase().includes(input.toLowerCase())||item.office.toLowerCase().includes(input.toLowerCase()) ).map(item=>(
      <MemberCard
      key={item.id}
      Name={item.name} 
      Office={item.office} 
      Img={item.img}/>
    ))
  }

  return (
  <>
    <S.ContainerMS>
      <S.SearchBarBox>
        <S.FormMembers onSubmit={e=>(e.preventDefault())}>
          <S.SearchBar value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Pesquisar..." />
          <S.ButtonSearch><S.ImgBtn src={MagnifyingGlass} alt='icon magnifying glass'/></S.ButtonSearch>
        </S.FormMembers>
      </S.SearchBarBox>
      <S.BoxMambers>
        {SearchMembers()}
      </S.BoxMambers>
    </S.ContainerMS>

  </>
    );
}

export default MemberSearch;
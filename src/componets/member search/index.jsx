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
  const [members, setMembers]= useState([])
  const [input, setInput]= useState("")
  const ListMembers = [
    {img:Photo1, name:"Aline Fróes", office:"#CEO",},
    {img:Photo2, name:"Dimitri Duque", office:"#voluntários",},
    {img:Photo3, name:"Luzia Merlim", office:"#Agente Socioemocional",},
    {img:Photo4, name:"Paula Misan", office:"#voluntários",},
    {img:Photo5, name:"Aline Nogueira", office:"#Agente Socioemocional",},
    {img:Photo6, name:"Hugo Sabino", office:"#voluntários",},
    {img:Photo7, name:"Mariana Correia", office:"#Coordenadora Administrativa",},
    {img:Photo8, name:"Priscila Tufani", office:"#Agente de Estratégia",},
    {img:Photo9, name:"Andrea Marinho", office:"#Psicóloga",},
    {img:Photo10, name:"Karla De Melo", office:"#voluntários",},
    {img:Photo11, name:"Marina Tiago", office:"#Agente Socioemocional",},
    {img:Photo12, name:"Thais Brait", office:"#voluntários",},
    {img:Photo13, name:"Cris Dos Prazeres", office:"#Coordenadora Executiva",},
    {img:Photo14, name:"Karynne Moreira", office:"#Facilitadora Técnica",},
    {img:Photo15, name:"Marlon Yuri", office:"#Instrutor Técnico",},
  ] 

  const SearchName = (e) => {
      const filterMamber = ListMembers.filter(item => {
        if(item) {
          return true;
        }
      })
  
      console.log(input)
      setInput(e.target.value)
      setMembers(filterMamber)
  }
  return (
  <>
    <S.ContainerMS>
      <S.SearchBarBox>
        <S.FormMembers onSubmit={e=>(
          e.preventDefault()
          
          )}>
          <S.SearchBar value={input} onChange={(e)=>SearchName(e)} type="text" placeholder="Pesquisar..." />
          <S.ButtonSearch><S.ImgBtn src={MagnifyingGlass} alt='icon magnifying glass'/></S.ButtonSearch>
        </S.FormMembers>
      </S.SearchBarBox>
      <S.BoxMambers>
        {members.map(item=>(
          <MemberCard
          Name={item.name} 
          Office={item.office} 
          Img={item.img}/>
        ))}
      </S.BoxMambers>
    </S.ContainerMS>

  </>
    );
}

export default MemberSearch;
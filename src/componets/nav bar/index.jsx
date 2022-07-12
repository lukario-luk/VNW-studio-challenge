import React from 'react';
import {NavBarContainer,ListNavBar,Li,A} from './styles';

function NavBar() {
  return (
  <>
  <NavBarContainer>
            <ListNavBar>
                <Li><A href='#Aboult'>Sobre</A></Li>
                <Li><A href='#Formation'>Formação</A></Li>
                <Li><A href='#Team'>Equipe</A></Li>
                <Li><A href='#Events'>Eventos</A></Li>
                <Li><A href='#contacts'>Contatos</A></Li>
            </ListNavBar>
        </NavBarContainer>
  </>
  );
}

export default NavBar;
import styled from 'styled-components';

const ContainerMS = styled.div`
  width:100%;
`
const SearchBarBox =styled.div`
    width:1490px;
    padding:40px 0 30px 151px;
    background-color:#0F2260;
`
const FormMembers = styled.form`
    width:302px;
    display:flex;
    border:1px solid #fff;
    border-radius:4px;
    background-color:rgba(0,0,0,0);
`
const SearchBar =styled.input`
    width:275px;
    height:37px;
    border:none;
    background-color:rgba(0,0,0,0);
    &::placeholder { 
        color: #fff;
        font-size:26px;
}
`
const ButtonSearch =styled.button`
    width:37px;
`
const ImgBtn = styled.img`
    width:100%;
    background-color:#0F2260;
`
const BoxMambers =styled.ul`
    width:100%;
    
    display:flex;
    flex-wrap:wrap;
`
export {ContainerMS,FormMembers,SearchBar,ButtonSearch,ImgBtn,BoxMambers,SearchBarBox}

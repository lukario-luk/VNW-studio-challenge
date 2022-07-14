import React from "react";
import Header from "./componets/header";
import Main from "./componets/main";
import Footer from "./componets/footer";
import { createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
  margin:0px;
  padding:0px;
  box-sizing:border-box;
}
`
export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

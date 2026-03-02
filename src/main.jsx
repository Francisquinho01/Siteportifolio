import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header/Header"
import Hero from"./Hero/Hero"
import Funcao from"./funcao/funcao"
import Contato from "./Contato/Contato";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
      <Header/>
      <Hero/>
      <Funcao/>
      <Contato/>
  </StrictMode>
);
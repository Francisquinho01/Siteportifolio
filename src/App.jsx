import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import GlobalStyle from "./GlobalStyle";

import Header from "./Components/Header/Header";
import Ticket from "./Components/Ticket/Ticket";
import Hero from "./Components/Hero/Hero";
import Funcao from "./Components/funcao/funcao";
import Contato from "./Components/Contato/Contato";
import Historia from "./Components/Historia/Historia";
import Projetos from "./Components/Projetos/Projetos";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Ticket />
      <Hero />
      <Historia />
      <Funcao />
    </>
  );
}

function Layout({ children }) {
  return (
    <>
      <Header />

      {children}

      <Contato />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/projetos"
          element={
            <Layout>
              <Projetos />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
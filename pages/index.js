import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/globalStyles";
import { lightTheme, darkTheme } from "../components/Theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const themeToggler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledHome>
        <Head>
          <title>Aya Bochman | Full Stack Web Developer</title>
          <link rel="icon" href="/laptop.ico" />
        </Head>
        <Header />
        <Navbar />
        <button type="button" className={"dm-btn"} onClick={themeToggler}>
          <FontAwesomeIcon icon={faMoon} />
        </button>
        <Main />
        {/* <footer> */}
        <Footer />
        {/* </footer> */}
      </StyledHome>
    </ThemeProvider>
  );
}

const StyledHome = styled.div`
  .dm-btn {
    height: 40px;
    width: 40px;
    position: fixed;
    bottom: 70px;
    right: 10px;
    border-radius: 20px;
    border: 1px solid var(--gradient-1);
    cursor: pointer;
    z-index: 1;
  }
`;

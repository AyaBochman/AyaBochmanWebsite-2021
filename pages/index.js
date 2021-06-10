import React, { useState, useRef } from "react";
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
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
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
        <Header topRef={topRef} />
        <Navbar aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef}/>
        <button type="button" className={"dm-btn"} onClick={themeToggler}>
          <FontAwesomeIcon icon={darkMode ? farMoon : faMoon} />
        </button>
        <Main topRef={topRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef}/>
        <Footer />
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
    right: 50px;
    border-radius: 50%;
    border: none;
    background: lightgray;
    cursor: pointer;
    box-shadow: 0 0 2px 1px grey;
    z-index: 1;
  }
`;

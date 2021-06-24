import React, { useState, useEffect, useRef } from "react";
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
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const refs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const themeToggler = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", blaTry);
    }
  }, []);

  const blaTry = () => {
    const scrollY = window.pageYOffset;
    Object.keys(refs).forEach((key) => {
      const sectionHeight = refs[key].current.offsetHeight;
      const sectionTop = refs[key].current.offsetTop - 200;
      const sectionId = key;
      let link = document.querySelector("a[href*=" + sectionId + "]");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link && link.classList.add("active");
      } else {
        link && link.classList.remove("active");
      }
    });
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <StyledHome>
        <Head>
          <title>Aya Bochman | Full Stack Web Developer</title>
          <link rel="icon" href="/laptop.ico" />
        </Head>
        <Header ref={refs.home} />
        <Navbar ref={refs} themeToggler={themeToggler} darkMode={darkMode} />
        <Main ref={refs} />
        <Footer />
      </StyledHome>
    </ThemeProvider>
  );
}

const StyledHome = styled.div``;

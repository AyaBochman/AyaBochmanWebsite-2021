import Head from "next/head";
import { useRef } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import styled from "styled-components";

export default function Home() {
  const SkillsRef = useRef(null);
  return (
    <StyledHome>
      <Head>
        <title>Aya Bochman | Full Stack Web Developer</title>
        <link rel="icon" href="/laptop.ico" />
      </Head>

      <Header />
      <Navbar />
      <Main SkillsRef={SkillsRef} />
      {/* <footer> */}
      <Footer />
      {/* </footer> */}
    </StyledHome>
  );
}

const StyledHome = styled.div``;

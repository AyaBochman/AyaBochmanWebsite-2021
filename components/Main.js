import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import Joke from "./Joke";
import Contact from "./Contact";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Main = ({ topRef, aboutRef, skillsRef, contactRef }) => {
  const scrollTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <StyledMain>
      <Fade big>
        <About aboutRef={aboutRef} />
      </Fade>
      <Fade big>
        <Skills skillsRef={skillsRef} />
      </Fade>

      <Contact contactRef={contactRef} />
      <Joke />
      <a className={"up-btn"} onClick={scrollTop}>
        <FontAwesomeIcon icon={faChevronUp} />
      </a>
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-family: "Raleway";
  color: var(--light-text);
  .up-btn {
    height: 50px;
    width: 50px;
    color: var(--gradient-1);
    margin: 0 auto 30px auto;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

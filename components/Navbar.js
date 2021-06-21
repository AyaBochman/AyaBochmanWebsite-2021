import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Navbar = ({ aboutRef, skillsRef, contactRef }) => {
  const scrollRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <StyledNav>
      <Fade top>
        <a onClick={() => scrollRef(aboutRef)} className={"link"} href="#about">
          About
        </a>
        <a
          onClick={() => scrollRef(skillsRef)}
          className={"link"}
          href="#skills"
        >
          Skills
        </a>
        <a
          onClick={() => scrollRef(contactRef)}
          className={"link"}
          href="#contact"
        >
          Contact
        </a>
      </Fade>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.div`
  height: 60px;
  font-family: "Raleway";
  box-shadow: 0 4px 6px -4px grey;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  padding: 0 25px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: var(--light-bg);
  a {
    text-transform: uppercase;
    font-size: 20px;
    color: var(--gradient-2);
    font-weight: 300;
    padding: 0.25rem 0;
    transition: 0.1s ease-in-out;
    margin: 0 10px;
  }

  a.link {
    &:hover,
    &:focus {
      color: var(--gradient-1);
      border-bottom: 3px solid var(--gradient-1);
    }
  }

  .active {
    color: var(--gradient-1);
    border-bottom: 3px solid var(--gradient-1);
  }

  @media (min-width: 768px) {
    a {
      margin: 0 30px;
    }
  }
`;

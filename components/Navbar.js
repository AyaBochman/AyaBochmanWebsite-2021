import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <StyledNav>
        {/* <FontAwesomeIcon icon={faGlobe} /> */}
      {/* <a type="button">🌐 Aya Bochman Full Stack Web Developer</a> */}
      <a className={"link"} href="#about">
        About
      </a>
      <a className={"link"} href="#skills">
        Skills
      </a>
      <a className={"link"} href="#contact">
        Contact
      </a>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.div`
  height: 60px;
  /* background-color: #fff; */
  border-top: 3px solid #d947bc;
  box-shadow: 0 4px 6px -4px grey;
  display: flex;
  justify-content: center;
  width: 100%;
  /* justify-content: space-between; */
  align-items: center;
  padding: 0 25px;

  a {
    text-transform: uppercase;
    font-size: 20px;
    color: var(--gradient-2);
    font-weight: 300;
    padding: 0.25rem 0;
    transition: 0.1s ease-in-out;
    /* padding: 0 5px; */
    margin: 0 10px;
  }

  a.link {
    &:hover {
      color: var(--gradient-1);
      border-bottom: 3px solid var(--gradient-1);
    }
  }
`;

import React, { forwardRef, useState, useRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faMoon, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons";

const Navbar = forwardRef((props, refs) => {
  const { themeToggler, darkMode, isMobile } = props;
  const [isOpen, setIsOpen] = useState(false);
  const navBtnRef = useRef(null);

  const scrollRef = (name) => {
    refs[name].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileClick = (name) => {
    setIsOpen(false);
    scrollRef(name);
  };

  return (
    <StyledNav isMobile={isMobile}>
      {isMobile ? (
        <>
          <MobileNav>
            <button type="button" className={"dm-btn"} onClick={themeToggler}>
              <FontAwesomeIcon
                icon={farMoon}
                className={"nav-icon moon"}
                icon={darkMode ? farMoon : faMoon}
              />
            </button>
            <button
              type="button"
              className={"menu-btn"}
              ref={navBtnRef}
              onClick={handleOpen}
            >
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                className={"nav-icon bars"}
              />
            </button>
          </MobileNav>
          {isOpen ? (
            <MobileMenu>
              <div className={"mobile-links"}>
                <a
                  onClick={() => handleMobileClick("about")}
                  className={"link link-txt"}
                  href="#about"
                >
                  About
                </a>
                <a
                  onClick={() => handleMobileClick("skills")}
                  className={"link link-txt"}
                  href="#skills"
                >
                  Skills
                </a>
                <a
                  onClick={() => handleMobileClick("contact")}
                  className={"link link-txt"}
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </MobileMenu>
          ) : null}
        </>
      ) : (
        <Fade top>
          <div>
            <a
              onClick={() => scrollRef("home")}
              className={"link home-btn"}
              href="#home"
            >
              <FontAwesomeIcon icon={faLaptopCode} className={"nav-icon"} />
            </a>
          </div>
          <div>
            <a
              onClick={() => scrollRef("about")}
              className={"link link-txt"}
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => scrollRef("skills")}
              className={"link link-txt"}
              href="#skills"
            >
              Skills
            </a>
            <a
              onClick={() => scrollRef("contact")}
              className={"link link-txt"}
              href="#contact"
            >
              Contact
            </a>
          </div>

          <button type="button" className={"dm-btn"} onClick={themeToggler}>
            <FontAwesomeIcon
              icon={farMoon}
              className={"nav-icon moon"}
              icon={darkMode ? farMoon : faMoon}
            />
          </button>
        </Fade>
      )}
    </StyledNav>
  );
});

export default Navbar;

const MobileNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const MobileMenu = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  background: ${({ theme }) => theme.navBackground};
  position: absolute;
  top: 60px;
  border-top: 2px solid var(--gradient-1);
  transition: 0.3s ease-in-out;
  .mobile-links {
    display: flex;
    flex-direction: column;
  }
`;

const StyledNav = styled.div`
  height: 60px;
  font-family: "Raleway";
  box-shadow: 0 4px 6px -4px grey;
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 0 30px;
  background: ${({ theme }) => theme.navBackground};
  a {
    text-transform: uppercase;
    font-size: 20px;
    color: ${({ theme }) => theme.secondaryColor};
    font-weight: 300;
    padding: 0.25rem 0;
    transition: 0.1s ease-in-out;
    margin: 0 10px;
  }

  a.link-txt {
    &:hover,
    &:active {
      color: var(--gradient-1);
      border-bottom: ${(props) =>
        props.isMobile ? "none" : "3px solid var(--gradient-1)"};
    }
  }

  .active {
    color: var(--gradient-1);
    border-bottom: ${(props) =>
      props.isMobile ? "none" : "3px solid var(--gradient-1)"};
  }

  @media (min-width: 768px) {
    a {
      margin: 0 30px;
    }
  }
  .moon,
  .bars {
    color: ${({ theme }) => theme.secondaryColor};
  }
  a.home-btn,
  button.dm-btn,
  button.menu-btn {
    border: none;
    margin: 0;
    background: none;
    cursor: pointer;
    margin-top: 2px;
    transition: 0.1s ease-in-out;
  }

  a.home-btn {
    display: flex;
    align-items: center;
    &:active {
      color: var(--gradient-1);
    }
  }

  .nav-icon {
    height: 28px;
    &:hover {
      color: var(--gradient-1);
    }
  }
`;

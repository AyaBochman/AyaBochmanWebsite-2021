import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <span className={"footer"}>
        &copy; This
        <a
          className={"web-link"}
          href="https://github.com/AyaBochman/AyaBochmanWebsite"
          target="_blank"
        >
          website
        </a>
        was coded &amp; designed 100% by Aya Bochman {new Date().getFullYear()}
      </span>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: auto;
  padding: 10px;
  width: 100%;
  background-color: var(--gradient-2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  opacity: 0.8;
  .web-link {
    text-decoration: underline;
  }
`;

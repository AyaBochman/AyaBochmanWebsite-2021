import React from "react";
import styled from "styled-components";
import Heading from "./commons/Heading";
import { Flip } from "react-reveal";
import CustomButton from "./commons/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const About = ({ aboutRef }) => {
  return (
    <StyledAbout>
      <Heading itemRef={aboutRef} text={"about"} />
      <img className={"aya-img"} src={"../../static/img/aya.png"} alt={"me"} />
      <h2 className={"intro"}>
        I’m a Front End &amp; Back End Developer from Israel.
      </h2>
      <div className={"about-text"}>
        My name is Aya Bochman, I came from the designing world and fell in love
        with the way code is bringing everything to life. I’m currently
        specialized in React and Node.js web applications, with SSR using
        Next.js. I love designing and building web applications from scratch,
        for work and for fun, with determination to create the best experience.
      </div>
      <Flip bottom>
        <CustomButton
          text={
            <a href="../../static/files/Aya-Bochman-CV.pdf" download>
              Download CV
            </a>
          }
          icon={<FontAwesomeIcon icon={faDownload} />}
        />
      </Flip>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 40px 40px 40px;
  box-shadow: 0 4px 6px -4px grey;
  /* text-align: center; */
  .aya-img {
    width: 220px;
    height: auto;
    align-self: center;
  }
  .intro {
    text-align: center;
    font-weight: 400;
    color: var(--gradient-2);
  }
  .about-text {
    line-height: 1.3;
    margin-bottom: 30px;
    margin: 0 auto 30px auto;
  }
  @media (min-width: 1024px) {
    padding: 40px 300px 40px 300px;
  }
`;

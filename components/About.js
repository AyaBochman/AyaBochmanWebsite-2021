import React from "react";
import styled from "styled-components";
import Heading from "./commons/Heading";
import Fade from "react-reveal/Fade";
import Divider from "./commons/Divider";
import CustomButton from "./commons/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <StyledAbout>
      <Heading text={"about"} />
      <img className={"aya-img"} src={"../../static/img/aya.png"} alt={"me"} />
      {/* <span className={"location"}>📍 Current Location: Belgrade, Serbia</span> */}
      <h2 className={"intro"}>
        I’m a Front End &amp; Back End Developer from Israel.
      </h2>
      <div className={"about-text"}>
        I came from the designing world and fell in love with the way code is
        bringing everything to life. I’m currently specialized in React and
        Node.js web applications, with SSR using Next.js.
      </div>
      <CustomButton
        text={"download cv"}
        icon={<FontAwesomeIcon icon={faDownload} />}
      />
      {/* <Fade left>
        <Divider />
      </Fade> */}
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px 49px;
  text-align: center;
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
    width: 600px;
    margin: 0 auto 30px auto;
  }
  @media (min-width: 768px) {
    padding: 15px 150px;
  }
`;

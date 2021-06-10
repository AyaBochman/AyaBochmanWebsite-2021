import React from "react";
import styled from "styled-components";
import Heading from "./commons/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import CustomButton from "./commons/CustomButton";
import { Slide, Flip, Fade } from "react-reveal";

const Contact = ({ contactRef }) => {
  return (
    <StyledContact>
      <Heading itemRef={contactRef} text={"contact"} />
      <Fade bottom>
        <div className={"contact-details"}>
          <div>Want us to work together? Send me a message!</div>
          <span className={"email"}>
            <FontAwesomeIcon className={"contact-icon"} icon={faEnvelope} />
            aya.bochman@gmail.com
          </span>
          <Flip bottom>
            <CustomButton
              text={<a href={"mailto:aya.bochman@gmail.com"}>send email</a>}
              icon={
                <FontAwesomeIcon
                  className={"paper-plane"}
                  icon={faPaperPlane}
                />
              }
            />
          </Flip>
          <div>And find me here:</div>
          <a href="https://www.linkedin.com/in/aya-bochman/" target="_blank">
            <FontAwesomeIcon className={"contact-icon"} icon={faLinkedin} />
          </a>
          <a href="https://github.com/AyaBochman" target="_blank">
            <FontAwesomeIcon className={"contact-icon"} icon={faGithub} />
          </a>

          <div className={"links-container"}>
            <div></div>
          </div>
        </div>
      </Fade>
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.div`
  /* background-image: url("../../static/img/code-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 50%;
  background-size: cover; */
  width: 100%;
  /* height: 500px; */
  text-align: center;
  padding: 40px;
  .contact-details {
    /* font-size: 20px; */
  }
  .contact-icon {
    height: 28px;
    width: 28px;
    transition: all 0.1s ease-in-out;
    margin-right: 10px;
    color: var(--gradient-1);
    &:hover {
      transform: scale(1.2);
    }
  }
  .email {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

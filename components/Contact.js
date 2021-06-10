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
    <>
      <Heading itemRef={contactRef} text={"contact"} />
      <StyledContact>
        <Fade bottom>
          <div className={"contact-details"}>
            <div>Let's be friends 🤝</div>
            <a href="https://www.linkedin.com/in/aya-bochman/" target="_blank">
              <FontAwesomeIcon className={"contact-icon"} icon={faLinkedin} />
            </a>
            <a href="https://github.com/AyaBochman" target="_blank">
              <FontAwesomeIcon className={"contact-icon"} icon={faGithub} />
            </a>
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
            <div className={"links-container"}>
              <div></div>
            </div>
          </div>
        </Fade>
      </StyledContact>
    </>
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
  /* color: #fff; */
  line-height: 1.3;
  padding: 20px 50px 45px 50px;
  .contact-details {
    font-size: 20px;
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

  @media (min-width: 1024px) {
    padding: 30px 300px 40px 300px;
  }
`;

import React from "react";
import styled from "styled-components";

const CustomButton = ({ text, icon, isDownload = false, path }) => {
  return (
    <StyledButton>
      {isDownload ? (
        <a className={"send-btn"} href={path} download>
          <span className={"text"}>{text}</span>
          <span className={"icon"}>{icon && icon}</span>
        </a>
      ) : (
        <button type="button" className={"send-btn"}>
          <span className={"text"}>{text}</span>
          <span className={"icon"}>{icon && icon}</span>
        </button>
      )}
    </StyledButton>
  );
};

export default CustomButton;

const StyledButton = styled.div`
  display: flex;
  .send-btn {
    font-family: "Raleway";
    position: relative;
    text-transform: uppercase;
    font-size: 18px;
    height: 50px;
    width: auto;
    display: flex;
    text-align: center;
    margin: 20px auto;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    background: var(--gradient-1);
    border: none;
    padding: 0 15px;
    &:hover {
      cursor: pointer;
    }
  }
  .send-btn:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    background-color: rgba(255, 255, 255, 0.4);
    transition: none;
    height: 100%;
  }
  .send-btn:hover:after {
    width: 120%;
    background-color: rgba(255, 255, 255, 0);
    transition: all 0.5s ease-in-out;
  }
  .text {
    margin-right: 5px;
  }
  .icon {
    height: 24px;
    width: 24px;
  }
`;

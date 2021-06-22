import React, { forwardRef } from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const Header = forwardRef((props, ref ) => {
  return (
    <>
      <StyledBg ref={ref} />

      <StyledHeader>
        <div className={"head-text"}>
          <Slide left>
            <div>Hello World!</div>
          </Slide>
          <Slide left>
            <span className={"im-aya"}>I'M AYA.</span>
          </Slide>
          <Slide right>
            <div className={"fs"}>
              <span className={"b-tag"}>&lt;b&gt;</span>Full Stack Web Developer
              <span className={"b-tag"}>&lt;/b&gt;</span>
            </div>
          </Slide>
        </div>
      </StyledHeader>
    </>
  );
});

export default Header;

const StyledBg = styled.div`
  width: 100%;
  height: var(--header-height);
  background: url("../../static/img/laptop-img.jpg") no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  /* border-bottom: 3px solid var(--gradient-1); */
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      var(--gradient-2) 20%,
      var(--gradient-1) 70%
    );
    opacity: 0.7;
  }
  @media (min-width: 768px) {
    background-position: initial;
  }
`;

const StyledHeader = styled.div`
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  height: auto;
  font-size: 48px;
  position: absolute;
  top: 50px;
  left: calc(50% - 126px);

  .im-aya {
    font-weight: 500;
    margin-bottom: 20px;
  }

  .b-tag {
    color: var(--gradient-1);
    background: white;
    opacity: 0.5;
    margin: 10px;
    padding: 0 5px;
    font-weight: normal;
  }
  .fs {
    font-size: 34px;
    font-weight: normal;
    text-align: center;
    width: 250px;
    font-weight: 200;
  }

  .head-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img-text {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

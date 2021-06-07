import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

const Header = () => {
  return (
    <>
      <StyledBg>

      </StyledBg>
      <StyledHeader>
        {/* <Slide left> */}
        <div className={"head-text"}>
          <div>Hello World!</div>
          <span className={"im-aya"}>I'M AYA.</span>
          
            <div className={"fs"}>
              <span className={"b-tag"}>&lt;b&gt;</span>Full Stack Web Developer
              <span className={"b-tag"}>&lt;/b&gt;</span>
            </div>
         
        </div>
        {/* </Slide> */}

        {/* <Slide left> */}
        {/* </Slide> */}
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledBg = styled.div`
  width: 100%;
  height: 360px;
  background: url("../../static/img/laptop-img.jpg") no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
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
  @media (min-width: 768px){
      background-position: initial;
  }
`;

const StyledHeader = styled.div`
  color: #fff;
  /* padding: 25px 40px; */
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  height: auto;
  font-size: 48px;
    /* background: linear-gradient(0deg, var(--gradient-2) 20%, var(--gradient-1) 70%); */
position: absolute;
top: 50px;
left: calc(50% - 126px);
/* left: 15%; */
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
  }
  .fs {
    font-size: 34px;
    font-weight: normal;
    text-align: center;
    width: 250px;
    /* margin: 15px; */
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

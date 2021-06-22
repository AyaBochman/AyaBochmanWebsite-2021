import React, { forwardRef, useEffect } from "react";
import styled from "styled-components";

const Heading = (props) => {
  const { text, color } = props;

  return (
    <StyledHeading color={color}>
      <div className={"heading"}>{text}</div>
    </StyledHeading>
  );
};

export default Heading;

const StyledHeading = styled.div`
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  text-align: center;
  font-size: 32px;
  margin: 0 auto 8px auto;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : "var(--gradient-1)")};
`;

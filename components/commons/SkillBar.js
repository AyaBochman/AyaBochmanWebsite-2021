import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SkillBar = ({ skill }) => {
  const { name, percent } = skill;
  const [skillPercent, setSkillPercent] = useState("0%");
  useEffect(() => {
    setSkillPercent(`${percent}%`);
  }, []);
  return (
    <StyledSkill percent={skillPercent}>
      <div className={"skill"}>
        {name}&nbsp;&nbsp;&nbsp;{percent && `${percent}%`}
      </div>
      <div className={"bar"}></div>
    </StyledSkill>
  );
};

export default SkillBar;

const StyledSkill = styled.div`
  margin-bottom: 10px;
  .skill {
    margin-bottom: 5px;
  }
  .bar-container {
    width: 100%;
  }
  .bar {
    background: var(--gradient-1);
    height: 10px;
    width: ${(props) => (props.percent ? props.percent : "100%")};
    border-radius: 20px;
    transition: 1.3s 0.2s width ease-in-out;
  }
`;

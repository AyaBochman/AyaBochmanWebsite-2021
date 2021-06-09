import React from 'react';
import styled from 'styled-components';
import Heading from './commons/Heading';
import SkillBar from './commons/SkillBar';
import formatDistance from 'date-fns/formatDistance';

const skills = [
    {
        name: 'React',
        percent: '90'
    },
    {
        name: 'CSS',
        percent: '80'
    },
    {
        name: 'HTML',
        percent: '85'
    },
    {
        name: 'Javascript',
        percent: '90'
    },
    {
        name: 'Node.js',
        percent: '75'
    },
    {
        name: 'MongoDB',
        percent: '70'
    }
];

const Skills = ({skillsRef}) => {

    const calculateExp = () => {
        const args = [new Date(2019, 1, 9), new Date()];
        return formatDistance(...args);
    };

    return (
        <StyledSkills>
            <Heading itemRef={skillsRef} text={'skills'}/>
            <span className={'exp'}><code>let myExp = {calculateExp()}</code>  </span>
            <div className={'skills-container'}>
                {skills && skills.map((skill, i) => {
                    return <SkillBar key={i} skill={skill} />
                })}

            </div>

        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 0 49px 45px 40px;
.exp{
    margin: 0 auto 20px auto;
    font-size: 16px;
    color: var(--gradient-2);
}
.skills-container{
    width: 250px;
    margin: 0 auto;
}
`;
import React from 'react';
import styled from 'styled-components';
import Heading from './commons/Heading';
import SkillBar from './commons/SkillBar';

const skills = [
    {
        name: 'React',
        // percent: '85'
    },
    {
        name: 'CSS',
        // percent: '80'
    },
    {
        name: 'HTML',
        // percent: '85'
    },
    {
        name: 'Javascript',
        // percent: '90'
    },
    {
        name: 'Node.js',
        // percent: '75'
    },
    {
        name: 'MongoDB',
        // percent: '70'
    }
];

const Skills = () => {
    return (
        <StyledSkills>
            <Heading text={'skills'} />
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
.skills-container{
    width: 250px;
    margin: 0 auto;
}
`;
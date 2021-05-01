import React from 'react';
import styled from 'styled-components';
import Heading from './commons/Heading';
import SkillBar from './commons/SkillBar';
// import formatDistance from 'date-fns/formatDistance';
// import formatDistanceStrict from 'date-fns/formatDistanceStrict';
import formatDuration from 'date-fns/formatDuration'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { formatDistance } from 'date-fns/esm'

const skills = [
    {
        name: 'React',
        percent: '85'
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

const Skills = () => {

    const calculateExp = () => {

        // const diff = formatDistanceStrict(new Date(2019, 9, 1), new Date());
        // let timestamp = ;
        // const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(new Date(2019, 9, 1))
        console.log('hi', timePeriod);
    };

    return (
        <StyledSkills>
            <Heading text={'skills'} />
            <span>Exp: {calculateExp()}</span>
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
    /* margin: 0 auto; */
}
`;
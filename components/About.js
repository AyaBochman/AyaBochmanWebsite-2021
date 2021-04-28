import React from 'react';
import styled from 'styled-components';
import Heading from './commons/Heading';

const About = () => {
    return (
        <StyledAbout>
            <Heading text={'about'} />
        </StyledAbout>
    );
};

export default About;

const StyledAbout = styled.div`

`;
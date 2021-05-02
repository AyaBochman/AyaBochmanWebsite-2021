import React from 'react';
import styled from 'styled-components';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const Content = () => {
    return (
        <StyledContent>
            <About />
            <Skills />
            <Contact />
        </StyledContent>
    );
};

export default Content;

const StyledContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* padding: 15px 49px; */
color: var(--light-text);
`;
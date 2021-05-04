import React from 'react';
import styled from 'styled-components';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

const Main = () => {
    return (
        <StyledMain>
            <About />
            <Skills />
            <Contact />
        </StyledMain>
    );
};

export default Main;

const StyledMain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* padding: 15px 49px; */
color: var(--light-text);
`;
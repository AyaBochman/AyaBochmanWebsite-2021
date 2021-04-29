import React from 'react';
import styled from 'styled-components';
import About from './About';
import Skills from './Skills';

const Content = () => {
    return (
        <StyledContent>
            <About />
            <Skills />
        </StyledContent>
    );
};

export default Content;

const StyledContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 15px 25px;
color: var(--light-text);
`;
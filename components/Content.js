import React from 'react';
import About from './About';
import styled from 'styled-components';

const Content = () => {
    return (
        <StyledContent>
            <About />
        </StyledContent>
    );
};

export default Content;

const StyledContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 15px 25px;
`;
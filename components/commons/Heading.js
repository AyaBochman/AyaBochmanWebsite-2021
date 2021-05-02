import React from 'react';
import styled from 'styled-components';

const Heading = ({ text, color }) => {
    return (
        <StyledHeading color={color}>
            <h1 className={'heading'}>{text}</h1>
        </StyledHeading>
    );
};

export default Heading;

const StyledHeading = styled.div`
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    font-weight: 300;
    color: ${props => props.color ? props.color : 'var(--gradient-1)'};
`;
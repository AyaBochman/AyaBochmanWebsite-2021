import React from 'react';
import styled from 'styled-components';

const Heading = ({ text }) => {
    return (
        <StyledHeading>
            <h1 className={'heading'}>{text}</h1>
        </StyledHeading>
    );
};

export default Heading;

const StyledHeading = styled.div`
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    width: 100px;
    text-align: center;
    margin: 0 auto;
    font-weight: 300;
    color: #D947BC;
`;
import React from 'react';
import styled from 'styled-components';

const Heading = ({ text, color, itemRef }) => {
    return (
        <StyledHeading color={color} ref={itemRef}>
            <div className={'heading'}>{text}</div>
        </StyledHeading>
    );
};

export default Heading;

const StyledHeading = styled.div`
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: 32px;
    padding: 10px;
    background-color: var(--gradient-1);
    margin: 0 auto;
    font-weight: 300;
    width: 100%;
    color: ${props => props.color ? props.color : '#fff'};
`;
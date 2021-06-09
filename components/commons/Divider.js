import React from 'react';
import styled from 'styled-components';

const Divider = () => {
    return (
        <StyledDivider />
            
        // </StyledDivider>
    );
};

export default Divider;

const StyledDivider = styled.div`
height: 5px;
width: 80px;
background: linear-gradient(90deg, var(--gradient-2) 20%, var(--gradient-1)  70%);
display: flex;
align-self: center;
margin: 0 auto;
/* margin: 20px 0; */
`;
import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <StyledNav>
          <a href='#'>About</a>
          <a href='#'>Skills</a>
          <a href='#'>Contact</a>
        </StyledNav>
    );
};

export default Navbar;

const StyledNav = styled.div`
height: 60px;
background-color: #fff;
border-top: 3px solid #D947BC;
box-shadow: 0 4px 6px -4px grey;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 25px;

a{
    text-transform: uppercase;
    font-size: 24px;
    color: var(--gradient-2);
    font-weight: 300;
    transition: 0.2s ease-in-out;
}
a:hover{
    color: var(--gradient-1);
  
}
`;
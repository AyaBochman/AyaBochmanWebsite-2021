import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

const Header = () => {
    return (
        <StyledHeader>
            <Slide left>
                <div>Hello World!</div>
                <span className={'im-aya'}>I'M AYA.</span>
                </Slide>
                <img className={'aya-img'} src={'../../static/img/aya.png'} alt={'me'} />
                <Slide left>
                <div className={'fs'}>&lt;b&gt;<br />&nbsp;&nbsp;Full<br />&nbsp;&nbsp;&nbsp;&nbsp;Stack <br />&nbsp;&nbsp;Web &nbsp;<br />&nbsp;&nbsp;&nbsp;Developer<br />&lt;/b&gt;</div>
           </Slide>

        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
color: #fff;
padding: 15px 25px;
font-family: 'Roboto', sans-serif;
font-weight: 100;
height: auto;
font-size: 40px;
width: 100%;
background: linear-gradient(0deg, var(--gradient-2) 20%, var(--gradient-1)  70%);
.im-aya{
    /* font-size: 30px; */
    font-weight: 500;
}
.aya-img{
    width: 220px;
    height: auto;
    position: absolute;
    right: 2%;
}
.fs{
    font-size: 28px;
    font-weight: normal;
}
`;
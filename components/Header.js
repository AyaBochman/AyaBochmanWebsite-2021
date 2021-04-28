import React from 'react';
import styled from 'styled-components';
const Header = () => {
    return (
        <StyledHeader>
            <div>Hello World!</div>
            <span className={'im-aya'}>I'M AYA.</span>
            <img className={'aya-img'} src={'../../static/img/aya.png'} alt={'me'} />
            <div className={'fs'}>&lt;b&gt;<br />&nbsp;&nbsp;Full<br />&nbsp;&nbsp;&nbsp;&nbsp;Stack <br />&nbsp;&nbsp;Web &nbsp;<br />&nbsp;&nbsp;&nbsp;Developer<br />&lt;/b&gt;</div>
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
background: linear-gradient(0deg, rgba(88,55,160,1) 20%, rgba(217,71,188,1) 70%);
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
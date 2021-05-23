import React from 'react';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';

const Header = () => {
    return (
        <StyledHeader>
            {/* <Slide left> */}
            <div className={'head-text'}>
            <div>Hello World!</div>
                <span className={'im-aya'}>I'M AYA.</span>
                <div className={'img-text'}>
                <div className={'fs'}><span className={'b-tag'}>&lt;b&gt;</span>Full Stack Web Developer<span className={'b-tag'}>&lt;/b&gt;</span></div>
                <img className={'aya-img'} src={'../../static/img/aya.png'} alt={'me'} />
                </div>
               
            </div>
                  {/* </Slide> */}
                 
                {/* <Slide left> */}
           {/* </Slide> */}

        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
color: #fff;
padding: 25px 40px;
font-family: 'Roboto', sans-serif;
font-weight: 100;
height: auto;
font-size: 40px;
width: 100%;
background: linear-gradient(0deg, var(--gradient-2) 20%, var(--gradient-1) 70%);
.im-aya{
    font-weight: 500;
}
.aya-img{
    width: 220px;
    height: auto;
}
.b-tag{
    color: var(--gradient-1);
    background: white;
    opacity: 0.5;
    margin: 10px;
    padding: 0 5px;
}
.fs{
    font-size: 28px;
    font-weight: normal;
    text-align: center;
    width: 200px;
    margin: 15px;
}

.head-text{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img-text{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
`;
import React from 'react';
import styled from 'styled-components';
import Heading from './commons/Heading';
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <StyledContact>
            <Heading text={'contact'} color={'#fff'} />
            <div className={'contact-details'}>
            <span><a href='https://www.linkedin.com/in/aya-bochman/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>Let's be friends 🤝</span>
                <span className={'email'}><FontAwesomeIcon icon={faEnvelope} />aya.bochman@gmail.com</span>
                <button type="button" className={'send-btn'}><a className={'link-btn'} href={'mailto:aya.bochman@gmail.com'}>Send Email</a><FontAwesomeIcon className={'paper-plane'} icon={faPaperPlane} /></button>
                <div className={'links-container'}>
                    <span><a href='https://github.com/AyaBochman' target='_blank'><FontAwesomeIcon icon={faGithub} /></a></span>
                </div>
            </div>

        </StyledContact>
    );
};

export default Contact;

const StyledContact = styled.div`
background-image: url('../../static/img/code-bg.jpg');
background-repeat:no-repeat;
background-size: 100% 50%;
background-size: cover;
height: 500px;
width: 100%;
text-align: center;
color: #fff;
line-height: 2;
.contact-details{
    font-size: 20px;
}
svg{
    font-size: 28px;
    transition: all .1s ease-in-out;
    margin-right: 10px;
&:hover{
    transform: scale(1.2);
}
.paper-plane:hover{
     transform: none;   
    }
}
.email{
    display: flex;
    align-items: center;
    justify-content:center;
}
.send-btn{
    position: relative;
    text-transform: uppercase;
    font-size: 20px;
    height: 50px;
    width: auto;
    display: flex;
    text-align: center;
    margin: 10px auto;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    background: var(--gradient-1);
    border: none;
a{
    margin-right: 5px;
}
}
.send-btn:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    background-color: rgba(255,255,255,0.4);
    transition: none;
    height: 100%;
}
.send-btn:hover:after{
    cursor: pointer;
    width: 120%;
    background-color: rgba(255,255,255,0);
    transition: all 0.4s ease-in-out;

}
.links-container{
    display: flex;
    flex-direction: column;
}
`;

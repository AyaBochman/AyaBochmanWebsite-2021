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
                <span className={'email'}><FontAwesomeIcon icon={faEnvelope} />aya.bochman@gmail.com</span>
                <button type="button" className={'send-btn'}><a className={'link-btn'} href={'mailto:aya.bochman@gmail.com'}>Send Email</a><FontAwesomeIcon icon={faPaperPlane} /></button>
                <div className={'links-container'}>
                    <span><a href='https://www.linkedin.com/in/aya-bochman/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>Let's be friends 🤝</span>
                    <span><a href='https://github.com/AyaBochman' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>Github to this page :)</span>
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
&:hover{
  transform: scale(1.2);
}
margin-right: 10px;
}
.email{
    display: flex;
    align-items: center;
    justify-content:center;
}
.send-btn{
text-transform: uppercase;
font-size: 20px;
height: 50px;
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
.links-container{
    display: flex;
    flex-direction: column;
}
`;

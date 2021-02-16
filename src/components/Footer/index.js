import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo>2021 copyright axe expo </SocialLogo>
              <SocialIcons>
                <SocialIconLink href='http://www.facebook.com' target='_blank' aria-label='Facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='http://www.instagram.com' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='http://www.youtube.com' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href='//www.twitter.com/axeexpo'
                  target='_blank'
                  aria-label='Twitter'
                  rel='noopener noreferrer'
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='https://www.linkedin.com/in/paul-murray-a3577a96/' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  };

export default Footer

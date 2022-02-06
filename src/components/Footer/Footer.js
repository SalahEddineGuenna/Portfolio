import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+212 6 25 73 74 56">
            +212 6 25 73 74 56
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:salah.eddine1768@gmail.com">
            salah.eddine1768@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/SalahEddineGuenna">
        <AiFillGithub size="2.5rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com/in/salah-eddine-guenna">
        <AiFillLinkedin size="2.5rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/salah_3ddin3">
        <AiFillInstagram size="2.5rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

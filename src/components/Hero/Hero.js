import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>

      <SectionTitle main center>
        Welcome To <br/>
        My portfolio.
      </SectionTitle>
      <SectionText>
        My name is salah Eddine I'm a comppter science engineering student, learning every new technology, driven by passion.
      </SectionText>
      <Button onclick={() => window.location = 'https://gmail.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;
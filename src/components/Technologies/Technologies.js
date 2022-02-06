import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { BiData } from "react-icons/bi";

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web-mobile developement.
      From Back-end to Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Next.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
            Back-end
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Django, Spring Boot and Databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Adobe XD and Figma.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiData size="3rem"/>
        <ListContainer>
          <ListTitle>
            Data Science
          </ListTitle>
          <ListParagraph>
            Experience with <br />
            Python for data science.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

import React from 'react';

import Container from '../components/container';
import { Body, Headline } from '../components/styleguide/text';

const AboutPage = () => {
  return (
    <Container direction="column">
      <Headline>About iKEA</Headline>
      <Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor tenetur corrupti autem tempora voluptatibus quia beatae dolorum harum deserunt ipsa odit sapiente, asperiores, nam, magni sit enim odio! Maiores!</Body>
    </Container>
  );
};

export default AboutPage;

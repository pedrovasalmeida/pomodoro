import { useEffect, useState } from 'react';

import {
  Container,
  Button,
  ButtonWrapper,
  DescriptionWrapper,
  InputWrapper,
  Input,
  InputLabel,
  Text,
  Title,
} from './styles';

export default function FirstTimeScreen() {
  return (
    <Container>
      <Title>Welcome, Honey.</Title>
      <DescriptionWrapper>
        <Text>Is your first time here. Enjoy!</Text>
        <Text>
          Here you will be able to get the most out of your studies, through the
          Pomodoro technique.
        </Text>
      </DescriptionWrapper>
      <InputWrapper>
        <InputLabel>Please, insert an name or nickname.</InputLabel>
        <Input />
      </InputWrapper>

      <ButtonWrapper>
        <Button>Go to timer</Button>
      </ButtonWrapper>
    </Container>
  );
}

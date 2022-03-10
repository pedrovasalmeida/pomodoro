import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import {
  Container,
  ButtonWrapper,
  DescriptionWrapper,
  InputWrapper,
  Input,
  InputLabel,
  Text,
  Title,
  NameTitle,
} from './styles';
import CustomButton from 'components/CustomButton';

export default function FirstTimeScreen() {
  const [welcomeUserName, setWelcomeUserName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const saveUserNameIntoLocalStorage = (name: string) => {
    if (window) {
      window.localStorage.setItem('@POMODORO.Username', name);
    }
  };

  useEffect(() => {
    if (inputRef?.current!.value?.length < 1) {
      setWelcomeUserName('Honey');
    }
  }, [welcomeUserName]);

  return (
    <Container>
      <Title>Welcome, </Title>
      <NameTitle>{welcomeUserName || 'Honey'}.</NameTitle>
      <DescriptionWrapper>
        <Text>Is your first time here. Enjoy!</Text>
        <Text>
          Here you will be able to get the most out of your studies, through the
          Pomodoro technique.
        </Text>
      </DescriptionWrapper>
      <InputWrapper>
        <InputLabel>Please, insert an name or nickname.</InputLabel>
        <Input
          ref={inputRef}
          maxLength={12}
          onChange={(e) =>
            inputRef?.current!.value.length <= 12 &&
            setWelcomeUserName(e.target.value)
          }
        />
      </InputWrapper>

      <ButtonWrapper>
        <Link href={'/timer'} passHref>
          <CustomButton
            disabled={
              inputRef.current ? inputRef.current.value.length < 1 : false
            }
            onClick={() => {
              if (inputRef.current && inputRef.current.value.length > 1) {
                setWelcomeUserName(inputRef?.current?.value || 'Honey');
                saveUserNameIntoLocalStorage(inputRef.current.value);
              }
            }}
          >
            Go to timer
          </CustomButton>
        </Link>
      </ButtonWrapper>
    </Container>
  );
}

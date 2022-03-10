import { useEffect, useState } from 'react';

import { Container } from './styles';

const TOTAL_POMODORO_TIME = 60 * 25; // 25 minutes

export default function Timer() {
  const [secondsAmount, setSecondsAmount] = useState(TOTAL_POMODORO_TIME);

  useEffect(() => {
    if (secondsAmount === 0) {
      return;
    }

    setTimeout(() => {
      setSecondsAmount((prevState) => prevState - 1);
    }, 1000);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <Container>
      {minutes}
      {seconds}
    </Container>
  );
}

import React, { useCallback, useEffect, useRef, useState } from 'react';
import CustomButton from 'components/CustomButton';

import {
  Container,
  Time as Minutes,
  Time as Seconds,
  ToggleTimerButton,
} from './styles';
import { useTimer } from 'hooks/useTimer';

export default function Timer() {
  const { time, isTimerRunning, startTimer } = useTimer();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <Container>
        <Minutes>{minutes.toString().padStart(2, '0')}</Minutes>
        <Seconds>{seconds.toString().padStart(2, '0')}</Seconds>
      </Container>

      <ToggleTimerButton onClick={() => startTimer()}>
        {!isTimerRunning && <CustomButton>Start Timer</CustomButton>}
      </ToggleTimerButton>
    </>
  );
}

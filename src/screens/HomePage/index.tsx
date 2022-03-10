import Timer from 'components/Timer';
import { useTimer } from 'hooks/useTimer';

import {
  Container,
  InformationAboutLevels,
  // Points,
  Title,
  TitleWrapper,
  // UserLevel,
} from './styles';

export default function HomePage() {
  const { isTimerRunning } = useTimer();

  return (
    <Container>
      <TitleWrapper>
        <Title>{!isTimerRunning && `Hello, Fulano.`}</Title>
        {/* <UserLevel>the Thinker.</UserLevel> */}

        {/* <Points>You have 344 points.</Points> */}
      </TitleWrapper>

      <Timer />

      <span>{isTimerRunning && 'Keep focus...'}</span>

      <InformationAboutLevels>See more about levels</InformationAboutLevels>
    </Container>
  );
}

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.text};

  padding: 2rem 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
`;

export const UserLevel = styled.h2`
  font-weight: 500;
  line-height: 2rem;
`;

export const Points = styled.span``;

export const TimerWrapper = styled.div``;

export const Time = styled.span`
  font-weight: 700;
  font-size: 7rem;
  pointer-events: none;
`;

export const ToggleTimerButton = styled.div``;

export const InformationAboutLevels = styled.span`
  font-weight: 500;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;

  cursor: pointer;

  margin-top: auto;
`;

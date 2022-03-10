import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { DEFAULT_TOTAL_TIME } from 'constants/Timer';

interface TimerContextProps {
  time: number; // 25 min
  isTimerRunning: boolean;
  startTimer: () => void;
  saveActualTimeOnStorage: (param: number) => void;
}

interface TimerProviderProps {
  children: ReactNode;
}

const TimerContext = createContext({} as TimerContextProps);

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [secondsAmount, setSecondsAmount] = useState(DEFAULT_TOTAL_TIME);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const handleTimerRun = (running: boolean) => {
    setIsTimerRunning(running);
  };

  const startTimer = () => {
    setIsTimerRunning(true);
  };

  const saveActualTimeOnStorage = (currentTime: number) => {
    if (window) {
      window.localStorage.setItem(
        '@POMODORO.CurrentTime',
        JSON.stringify(currentTime),
      );
    }
  };

  useEffect(() => {
    if (secondsAmount === 0) {
      return;
    }

    setTimeout(() => {
      if (isTimerRunning) {
        setSecondsAmount((prevState) => {
          saveActualTimeOnStorage(prevState - 1);
          return prevState - 1;
        });
      }
    }, 1000);
  }, [secondsAmount, isTimerRunning]);

  return (
    <TimerContext.Provider
      value={{
        time: secondsAmount,
        isTimerRunning,
        startTimer,
        saveActualTimeOnStorage,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);

  return context;
};

import { useRef, useState } from "react";

export const useTimer = (maxTime: number) => {
  const [time, setTime] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    setTime(maxTime);
    interval.current = setInterval(() => {
      setTime((currTime) => currTime - 1);
    }, 1000);
  };

  const clearTimer = () => {
    clearInterval(interval.current);
  };

  return {
    startTimer,
    clearTimer,
    time,
  };
};

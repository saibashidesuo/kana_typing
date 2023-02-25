import { useState } from 'react';

export default function useApp(): [
  boolean,
  number,
  number,
  (numberOfTypos: number) => void,
  () => void,
  () => void
] {
  const [isTyping, setIsTyping] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);
  const [numberOfTypos, setNumberOfTypos] = useState(0);
  const [timerIntervalId, setTimerIntervalId] = useState<number | null>(null);

  const start = () => {
    setIsTyping(true);
    setTimerIntervalId(
      window.setInterval(() => {
        setTimeTaken((prevTimeTaken) =>
          Number((prevTimeTaken + 0.1).toFixed(1))
        );
      }, 100)
    );
  };

  const end = () => {
    setIsTyping(false);
    if (!timerIntervalId) {
      throw new Error();
    }
    window.clearInterval(timerIntervalId);
  };

  return [isTyping, timeTaken, numberOfTypos, setNumberOfTypos, start, end];
}

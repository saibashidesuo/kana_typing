import { useState } from 'react';
import Clear from './Clear/Clear';
import Initial from './initial/Initial';
import Typing from './typing/Typing';

function App() {
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

  const component = () => {
    if (!timeTaken && !isTyping) {
      return <Initial start={start} />;
    }
    return isTyping ? (
      <Typing
        timeTakenAsString={timeTaken.toFixed(1)}
        numberOfTypos={numberOfTypos}
        setNumberOfTypos={setNumberOfTypos}
        end={end}
      />
    ) : (
      <Clear
        numberOfTypos={numberOfTypos}
        timeTakenAsString={timeTaken.toFixed(1)}
      />
    );
  };

  return component();
}

export default App;

import Clear from './Clear/Clear';
import Initial from './initial/Initial';
import Typing from './typing/Typing';
import useApp from './useApp';

function App() {
  const [isTyping, timeTaken, numberOfTypos, setNumberOfTypos, start, end] =
    useApp();

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
}

export default App;

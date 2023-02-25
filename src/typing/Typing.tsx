import useTyping from './useTyping';

type Props = {
  end: () => void;
  timeTakenAsString: string;
  numberOfTypos: number;
  setNumberOfTypos: (numberOfTypos: number) => void;
};

export default function Typing({
  end,
  timeTakenAsString,
  numberOfTypos,
  setNumberOfTypos,
}: Props) {
  const [nowTheme, typedCharacters] = useTyping(
    end,
    numberOfTypos,
    setNumberOfTypos
  );

  return (
    <div>
      <div>ミス数:{numberOfTypos}</div>
      <div>{timeTakenAsString}</div>
      <div>
        {nowTheme.split('').map((character, charactorNo) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={charactorNo} style={{ color: 'gray' }}>
            {character}
          </span>
        ))}
      </div>
      <div>{typedCharacters}</div>
    </div>
  );
}

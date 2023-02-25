import useTyping from './useTyping';
import './Typing.scss';

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
      <div className="theme">
        {nowTheme.split('').map((character, charactorNo) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={charactorNo}>{character}</span>
        ))}
      </div>
      <div>{typedCharacters}</div>
    </div>
  );
}

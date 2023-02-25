import { useCallback, useState, useEffect } from 'react';
import {
  addDakutenTo,
  addHanDakutenTo,
  canAddDakutenTo,
  canAddHanDakutenTo,
  kanaFrom,
} from '../../correspondence';
import themes from './themes';

export default function useTyping(
  end: () => void,
  numberOfTypos: number,
  setNumberOfTypos: (numberOfTypos: number) => void
): [string, string] {
  const [typedCharacters, setTypedCharacters] = useState('');
  if (!themes[0]) {
    throw new Error();
  }
  const [nowTheme, setTheme] = useState(themes[0]);

  const nextTypedCharactersFrom = useCallback(
    (code: string) => {
      const lastCharacter = typedCharacters.slice(-1);
      if (code === 'BracketLeft') {
        return canAddDakutenTo(lastCharacter)
          ? typedCharacters.slice(0, -1) + addDakutenTo(lastCharacter)
          : typedCharacters;
      }
      if (code === 'BracketRight') {
        return canAddHanDakutenTo(lastCharacter)
          ? typedCharacters.slice(0, -1) + addHanDakutenTo(lastCharacter)
          : typedCharacters;
      }
      return typedCharacters + kanaFrom(code);
    },
    [typedCharacters]
  );

  const isWrong = useCallback(
    (nextTypedCharacters: string) => {
      const lastCharacter = nextTypedCharacters.slice(-1);
      const themeSlicedNumberOfCharacters = nowTheme.slice(
        0,
        nextTypedCharacters.length
      );

      return !(
        (canAddDakutenTo(lastCharacter) &&
          nextTypedCharacters.slice(0, -1) + addDakutenTo(lastCharacter) ===
            themeSlicedNumberOfCharacters) ||
        (canAddHanDakutenTo(lastCharacter) &&
          nextTypedCharacters.slice(0, -1) + addHanDakutenTo(lastCharacter) ===
            themeSlicedNumberOfCharacters) ||
        nextTypedCharacters === themeSlicedNumberOfCharacters
      );
    },
    [nowTheme]
  );

  const typing = useCallback(
    (event: KeyboardEvent) => {
      if (!kanaFrom(event.code)) {
        return;
      }

      const nextTypedCharacters = nextTypedCharactersFrom(event.code);

      if (isWrong(nextTypedCharacters)) {
        setNumberOfTypos(numberOfTypos + 1);
        return;
      }
      if (nextTypedCharacters !== nowTheme) {
        setTypedCharacters(nextTypedCharacters);
        return;
      }

      const nextThemeIndex =
        themes.findIndex((theme) => theme === nowTheme) + 1;
      if (nextThemeIndex === themes.length) {
        end();
        return;
      }

      const nextTheme = themes[nextThemeIndex];
      if (!nextTheme) {
        throw new Error();
      }
      setTypedCharacters('');
      setTheme(nextTheme);
    },
    [
      end,
      isWrong,
      nextTypedCharactersFrom,
      nowTheme,
      numberOfTypos,
      setNumberOfTypos,
    ]
  );

  useEffect(() => {
    window.addEventListener('keyup', typing);
    return () => {
      window.removeEventListener('keyup', typing);
    };
  }, [typing]);

  return [nowTheme, typedCharacters];
}

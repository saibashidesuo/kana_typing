import { allThemes, numberOfThemes } from '../../env';

const themes = () =>
  [...new Array<string>(numberOfThemes)].reduce<string[]>((soFar) => {
    const theme = allThemes.splice(
      Math.floor(Math.random() * allThemes.length),
      1
    );
    return soFar.concat(theme);
  }, []);

export default themes();

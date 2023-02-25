/* eslint-disable @typescript-eslint/naming-convention */
const table: Record<string, string> = {
  Digit1: 'ぬ',
  Digit2: 'ふ',
  Digit3: 'あ',
  Digit4: 'う',
  Digit5: 'え',
  Digit6: 'お',
  Digit7: 'や',
  Digit8: 'ゆ',
  Digit9: 'よ',
  Digit0: 'わ',
  Minus: 'ほ',
  Equal: 'へ',
  IntlYen: 'ー',
  KeyQ: 'た',
  KeyW: 'て',
  KeyE: 'い',
  KeyR: 'す',
  KeyT: 'か',
  KeyY: 'ん',
  KeyU: 'な',
  KeyI: 'に',
  KeyO: 'ら',
  KeyP: 'せ',
  KeyA: 'ち',
  KeyS: 'と',
  KeyD: 'し',
  KeyF: 'は',
  KeyG: 'き',
  KeyH: 'く',
  KeyJ: 'ま',
  KeyK: 'の',
  KeyL: 'り',
  Semicolon: 'れ',
  Quote: 'け',
  Backslash: 'む',
  KeyZ: 'つ',
  KeyX: 'さ',
  KeyC: 'そ',
  KeyV: 'ひ',
  KeyB: 'こ',
  KeyN: 'み',
  KeyM: 'も',
  Comma: 'ね',
  Period: 'る',
  Slash: 'め',
  IntlRo: 'ろ',
};
/* eslint-enable @typescript-eslint/naming-convention */

const dakutenTable = [
  { from: 'か', to: 'が' },
  { from: 'き', to: 'ぎ' },
  { from: 'く', to: 'ぐ' },
  { from: 'け', to: 'げ' },
  { from: 'こ', to: 'ご' },
  { from: 'さ', to: 'ざ' },
  { from: 'し', to: 'じ' },
  { from: 'す', to: 'ず' },
  { from: 'せ', to: 'ぜ' },
  { from: 'そ', to: 'ぞ' },
  { from: 'た', to: 'だ' },
  { from: 'ち', to: 'ぢ' },
  { from: 'つ', to: 'づ' },
  { from: 'て', to: 'で' },
  { from: 'と', to: 'ど' },
  { from: 'は', to: 'ば' },
  { from: 'ひ', to: 'び' },
  { from: 'ふ', to: 'ぶ' },
  { from: 'へ', to: 'べ' },
  { from: 'ほ', to: 'ぼ' },
];
const handakutenTable = [
  { from: 'は', to: 'ぱ' },
  { from: 'ひ', to: 'ぴ' },
  { from: 'ふ', to: 'ぷ' },
  { from: 'へ', to: 'ぺ' },
  { from: 'ほ', to: 'ぽ' },
];

export const kanaFrom = (code: string) => table[code];

export const canAddDakutenTo = (kana: string) =>
  dakutenTable.some(({ from }) => from === kana);
export const addDakutenTo = (kanaToBeAbleToaddDakutenTo: string) => {
  const kanaAddedDakuten = dakutenTable.find(
    ({ from }) => from === kanaToBeAbleToaddDakutenTo
  )?.to;
  if (!kanaAddedDakuten) {
    throw new Error();
  }
  return kanaAddedDakuten;
};
export const isAddedDakutenTo = (kana: string) =>
  dakutenTable.some(({ to }) => to === kana);

export const canAddHanDakutenTo = (kana: string) =>
  handakutenTable.some(({ from }) => from === kana);
export const addHanDakutenTo = (kanaToBeAbleToaddHanDakutenTo: string) => {
  const kanaAddedHandakuten = handakutenTable.find(
    ({ from }) => from === kanaToBeAbleToaddHanDakutenTo
  )?.to;
  if (!kanaAddedHandakuten) {
    throw new Error();
  }
  return kanaAddedHandakuten;
};
export const isAddedHandakutenTo = (kana: string) =>
  handakutenTable.some(({ to }) => to === kana);

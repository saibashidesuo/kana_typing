import { numberOfThemes } from '../env';

type Props = {
  start: () => void;
};

export default function Initial({ start }: Props) {
  return (
    <div>
      <h1>かな入力タイピング</h1>
      <p>全部で{numberOfThemes}問あります！</p>
      <p>表示された文字を「かな入力」でタイピングしてください！</p>

      <div>※始めるボタンを押した瞬間に始まります！</div>
      <button type="button" onClick={start}>
        始める
      </button>
    </div>
  );
}

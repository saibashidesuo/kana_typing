type Props = {
  start: () => void;
};

export default function Initial({ start }: Props) {
  return (
    <div>
      <h1>かな入力タイピング</h1>

      <div>※始めるボタンを押した瞬間に始まります！</div>
      <button type="button" onClick={start}>
        始める
      </button>
    </div>
  );
}

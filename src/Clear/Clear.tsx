type Props = {
  numberOfTypos: number;
  timeTakenAsString: string;
};

export default function Clear({ numberOfTypos, timeTakenAsString }: Props) {
  return (
    <div>
      <div>かかった時間：{timeTakenAsString}</div>
      <div>間違え数：{numberOfTypos}</div>
      クリアおめでとう！
    </div>
  );
}

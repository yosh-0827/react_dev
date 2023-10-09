import { ColorMessage } from "./components/ColorMessage";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  console.log("レンダリング");
  //stateの定義
  const [num, setNum] = useState(0);

  //ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    setNum(num + 1);
  };

  //stateの値が変わったときにアラートを表示する
  useEffect(() => {
    alert("Stateの値が変わったよ");
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorMessage />
      <ColorMessage color="blue" message="お元気ですか?" />
      <ColorMessage color="pink" message="元気です" />
      <button onClick={onClickButton}> ボタン </button>
      <p>{num}</p>
    </>
  );
};

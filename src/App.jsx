import { ColorMessage } from "./components/ColorMessage";

export const App = () => {
  //ボタンを押した時に実行する関数を定義
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorMessage />
      <ColorMessage color="blue" message="お元気ですか?" />
      <ColorMessage color="pink" message="元気です" />
      <button onClick={onClickButton}> ボタン </button>
    </>
  );
};

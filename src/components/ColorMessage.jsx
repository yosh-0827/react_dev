export const ColorMessage = (props) => {
  // {color: "blue", message:"お元気ですか?"}
  //CSSオブジェクト
  const contentStyle = {
    color: props.color,
    fontSize: "20px",
  };

  return <p style={contentStyle}> {props.message} </p>;
};

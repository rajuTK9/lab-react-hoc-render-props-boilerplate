import React from "react";
import withCounter from "./withCounter";

function LikeImage(props) {
  const { count, increase } = props;
  return (
    <div>
      <button onClick={increase}>Like Image {count}</button>
    </div>
  );
}
export default withCounter(LikeImage);

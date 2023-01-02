import React from "react";
import withCounter from "./withCounter";

function LikePost(props) {
  const { count, increase } = props;
  return (
    <div>
      <button onClick={increase}>Like Post {count}</button>
    </div>
  );
}
export default withCounter(LikePost);

import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  function withCounter(props) {
    const [count, setCount] = useState(0);

    const increase = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <WrappedComponent count={count} increase={increase} />
      </div>
    );
  }
  return withCounter;
};
export default withCounter;

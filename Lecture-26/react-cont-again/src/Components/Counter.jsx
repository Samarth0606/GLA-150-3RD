import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Count - {count}</button>
    </div>
  );
}

export default Counter;

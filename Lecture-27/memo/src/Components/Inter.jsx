import React, { useState } from "react";

function Inter() {
  let [count, setCount] = useState(0);
  function handleClick() {
    setCount((c) => c + 1); //1
    setCount((c) => c + 1); //2 -> 1
    setCount((c) => c + 1); //3 -> 2
  }
  return (
    <div>
      <button onClick={handleClick}>Click - {count}</button>
    </div>
  );
}

export default Inter;

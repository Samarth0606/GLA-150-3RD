import React, { useState } from "react";

function Questions() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);

  console.log("renders");
  function handleClick() {
    console.log(count, "1st");
    setCount(count + 1);
    setCount2(count2 + 1);
    console.log(count, "2nd");
    setCount(count + 1);
    setCount2(count2 + 1);
    console.log(count, "3rd");
  }
  return (
    <div>
      <button onClick={handleClick}>Count-{count}</button>
    </div>
  );
}

export default Questions;

import React, { Fragment, useState } from "react";
import Frag from "./Components/Frag";
import MeriGaadi, { Bmw } from "./Components/sam";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import Better from "./Components/Better";

function App() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      <Better />
    </div>
  );
}

export default App;

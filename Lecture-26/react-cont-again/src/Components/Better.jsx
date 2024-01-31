import React, { useState } from "react";

function Better() {
  return (
    <div>
      <ChangeTodos titl="dont speak" />
      <Todos titl="mera yashu" />
      <Todos titl="agla todo" />
      <Todos titl="bohat door ka yashu" />
    </div>
  );
}

function Todos({ titl }) {
  return <h1>Title: {titl} </h1>;
}

function ChangeTodos({ titl }) {
  let [t, setT] = useState(titl);
  function handleClick() {
    setT(Math.floor(Math.random() * 10));
  }

  return (
    <div>
      <Todos titl={t} />
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default Better;

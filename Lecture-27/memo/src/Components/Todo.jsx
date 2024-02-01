import React, { useState } from "react";

function Todo() {
  return (
    <div>
      <Show titl="baarish aarhi hai" />
      <Show titl="baarish aarhi hai" />
      <Show titl="baarish aarhi hai" />
      <BadaShow titl="baarish rukgyi hai" />
    </div>
  );
}
function Show({ titl }) {
  return (
    <div>
      <h1>Title: {titl}</h1>
    </div>
  );
}

function BadaShow({ titl }) {
  let [t, setT] = useState(titl);
  function handleClick() {
    setT(Math.floor(Math.random() * 10));
  }
  return (
    <div>
      <Show titl={t} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default Todo;

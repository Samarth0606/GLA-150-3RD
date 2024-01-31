import React, { useState } from "react";

function Todo() {
  let [t, setT] = useState("GYM");
  function changeTodo() {
    setT(Math.floor(Math.random() * 10));
  }

  return (
    <div>
      <ShowTodo titl={t} desc="kal se gym" />
      <button onClick={changeTodo}>click</button>

      <ShowTodo titl="REACT" desc="kal se REACT" />
      <ShowTodo titl="placement" desc="kal se placement" />
    </div>
  );
}

function ShowTodo({ titl, desc }) {
  return (
    <div>
      <h1>Title: {titl} </h1>
      <h1>Desc: {desc}</h1>
    </div>
  );
}

export default Todo;

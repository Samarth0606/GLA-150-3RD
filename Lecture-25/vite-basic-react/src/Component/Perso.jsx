import React from "react";

function Perso() {
  function hadleClick() {
    console.log("clicked");
  }
  function hadleClick2(id) {
    console.log(id);
  }

  return (
    <div>
      <button onClick={hadleClick}>Click</button>
      <button onClick={() => hadleClick2(100)}>Click</button>
    </div>
  );
}

export default Perso;

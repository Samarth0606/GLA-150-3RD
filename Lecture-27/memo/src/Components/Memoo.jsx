import React, { Fragment, memo, useState } from "react";

function Memoo() {
  let [t, setT] = useState("chitthi aayi hai");
  return (
    <div>
      <Mymemo titl={t} />
      <button onClick={() => setT(Math.floor(Math.random() * 10))}>
        click
      </button>
      <Mymemo titl="memo seekh lo" />
      <Mymemo titl="kya hi krlenge" />
    </div>
  );
}

// function Mymemo({ titl }) {
//   return (
//     <div>
//       <h1>Title: {titl}</h1>
//     </div>
//   );
// }

let Mymemo = memo(function ({ titl }) {
  return (
    <>
      <h1>Title: {titl}</h1>
    </>
  );
});

export default Memoo;

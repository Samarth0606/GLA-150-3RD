import React, { memo, useCallback, useState } from "react";

function Callback() {
  let [count, setCount] = useState(0);

  //   let a = 10;
  let a = () => {
    console.log("hi hello");
  };
  //   let a = useCallback(() => {
  //     console.log("hi hello");
  //   }, []);

  return (
    <div>
      <Demo b={a} />
      <button onClick={() => setCount(count + 1)}>Count : {count} </button>
    </div>
  );
}
// function Demo({ b }) {
//   return (
//     <div>
//       <h1> {b} </h1>
//     </div>
//   );
// }

let Demo = memo(function ({ b }) {
  return (
    <div>
      <h1> {b()} </h1>
    </div>
  );
});

export default Callback;

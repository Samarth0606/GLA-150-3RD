import React, { useMemo, useState } from "react";

function Memoo() {
  let [count, setCount] = useState(0);

  let [inp, setInp] = useState(0);
  function handleChange(e) {
    setInp(e.target.value);
    console.log(e.target.value);
  }
  let memoAns = useMemo(
    function () {
      let ans = 0;
      for (let i = 1; i <= inp; i++) {
        console.log("hiii");
        ans = ans + i;
      }
      return ans;
    },
    [inp]
  );

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click - {count}</button>
      <input onChange={handleChange} type="text" name="" id="" value={inp} />
      <h1>Sum: {memoAns} </h1>
    </div>
  );
}

export default Memoo;

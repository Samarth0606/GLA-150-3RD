function Hello() {
  let rn = Math.floor(Math.random() * 10);
  //   console.log(rn);
  //   let lucky7 = 7;
  //   let el;
  //   if (rn === lucky7) {
  //     el = <h1>lucky 7</h1>;
  //   } else {
  //     el = "try again";
  //   }

  return (
    <div>
      <div>
        <h1>hello from hello {1 + 2}</h1>
      </div>
      <div>
        <h1>
          {/* {el}-&gt;{rn} */}
          {rn}
          {rn === 7 ? <h1>lucky 7</h1> : "try again"}
        </h1>
      </div>
    </div>
  );
}

export default Hello;

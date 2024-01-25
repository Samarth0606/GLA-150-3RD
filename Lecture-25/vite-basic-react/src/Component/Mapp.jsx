function Mapp() {
  let arr = ["😂", "✅", "❌", "🥳", "🥲"];
  let arr2 = [10, 20, 30, 40, 50];

  let r = Math.floor(Math.random() * 5);
  return (
    <div>
      {arr2.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default Mapp;

function Animal() {
  let arr = [10, 20, 30];
  let obj = { a: 10 };

  return (
    <div>
      <h1>i am not human i am a robot</h1>
      <p>{obj.a}</p>
      <p>{JSON.stringify(obj)}</p>
    </div>
  );
}

export default Animal;

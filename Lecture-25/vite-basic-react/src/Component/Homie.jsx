import React, { useState } from "react";

function Homie(props) {
  //   console.log(props);
  //   let naam = props.name;

  //   function logoutUser() {
  //     console.log(naam);
  //     naam = "anonymous";
  //     console.log(naam);
  //   }
  let [naam, setNaam] = useState(props.name);

  function logoutUser() {
    console.log(naam);
    setNaam("anonymous");
    console.log(naam);
  }

  return (
    <div>
      <h1>Naam: {naam} </h1>
      <h2>Umar: {props.age}</h2>
      <h3>Pasandeeda rang: {props.favColor}</h3>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default Homie;

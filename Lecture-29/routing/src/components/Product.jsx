import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h1>Gian hai aap</h1>
      {/* <a href="/">Home</a> */}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Product;

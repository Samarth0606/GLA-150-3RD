import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>I am Dashbaord , welcome</h1>
      {/* <a href="/">Home</a> */}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Dashboard;

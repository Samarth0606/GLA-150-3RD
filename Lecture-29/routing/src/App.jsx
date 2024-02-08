import React from "react";
// import { Route, BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Nav() {
  let navigate = useNavigate();

  function handleEvent1() {
    navigate("/dashboard");
  }
  function handleEvent2() {
    navigate("/products");
  }
  return (
    <nav style={{ backgroundColor: "lightgreen", color: "red" }}>
      <h1>i am a navbar</h1>
      <button onClick={handleEvent1}>Dashboard</button>
      <button onClick={handleEvent2}>products</button>
    </nav>
  );
}

export default App;

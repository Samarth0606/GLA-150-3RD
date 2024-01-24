// let rootEl = document.getElementById("root");

// let h1 = document.createElement("h1");

// h1.innerHTML = "hello delhi";

// rootEl.appendChild(h1);

// ---------------------------------------

// let rootEl = document.getElementById("root");

// let h1 = React.createElement("h1", null, "hi i am h1 of react");

// let h2 = React.createElement(
//   "h2",
//   { id: "sam", className: "vohra" },
//   "hi i am h2 of react"
// );

// ReactDOM.render(h1, rootEl);

// let root = ReactDOM.createRoot(rootEl);

// root.render(h2);

// -------------------------------------------

// let rootEl = document.getElementById("root");

// let div = React.createElement(
//   "div",
//   null,
//   React.createElement("h1", null, "hello from h1 inside div")
// );

// let root = ReactDOM.createRoot(rootEl);

// root.render(div);

// -----------------------------------------

// let rootEl = document.getElementById("root");

// let div = React.createElement("div", null, [
//   React.createElement("h1", null, "h1 inside div"),
//   React.createElement("p", null, "p inside div"),
// ]);

// let root = ReactDOM.createRoot(rootEl);

// root.render(div);

// -----------------------------

let rootEl = document.getElementById("root");

// let div = React.createElement("div", null, [
//   React.createElement("h1", null, "h1 inside div"),
//   React.createElement("p", null, "p inside div"),
// ]);
let div = (
  <div>
    <div>
      <h1>hello h1 jsx</h1>
      <p>hello p jsx</p>
    </div>
  </div>
);

let root = ReactDOM.createRoot(rootEl);

root.render(div);

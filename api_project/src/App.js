import "./App.css";
import React from "react";

function App() {
  let [json, setJson] = React.useState("");

  const fetchJson = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setJson(json));
  };
  // const createArray = json.split();
  // const newAr = createArray.map(function (name) {
  //   return name.title;
  // });
  return (
    <div className="App">
      <button onClick={fetchJson}>Click Me!</button>
      <pre>{JSON.stringify(json)}</pre>
    </div>
  );
}

export default App;

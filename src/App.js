import { useState } from "react";
import "./App.css";

import BlockList from "./components/block-list/block-list.component";

const data = [
  {
    _id: 0,
    character: "A",
  },
  {
    _id: 1,
    character: "B",
  },
  {
    _id: 2,
    character: "C",
  },
];

const App = () => {
  const [monster] = useState(data);
  const [name] = useState("Stranger");
  // const changeName = () => {
  //   setName("Desmond");
  // };

  const displayDate = () => {
    let el = document.getElementById("my-display");
    el.innerText = new Date();
  };

  return (
    <div>
      <p>my name is {name}</p>
      <button onClick={displayDate}> Click me</button>
      <p id="my-display">place date here</p>
      {<BlockList monsters={monster} />}
    </div>
  );
};

export default App;

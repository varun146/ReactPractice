import "./App.css";
import List from "./components/List";
import Actions from "./components/Actions";
import { items } from "./data";
import { useState } from "react";

function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  return (
    <div className="app">
      <List items={leftItems} />
      <Actions />
      <List items={rightItems} />
    </div>
  );
}

export default App;

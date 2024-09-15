import React from "react";
import "./App.css";
import { HiMenuAlt4 } from "react-icons/hi";

function App() {  
  return (
    <div className="body">
      <header className="App-header">
        <div className="initials">
          <p>bb</p>
        </div>
          <button className="menu">menu <HiMenuAlt4 className="icon"/></button>
      </header>
      <div className="content">
        <div className="title">
          <p>Turning ideas into creative solutions.</p>
        </div>
        <div className="description">
          <p>Innovative web developer crafting unique user experiences.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

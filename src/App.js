import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York City" />
    </div>
  );
}

export default App;

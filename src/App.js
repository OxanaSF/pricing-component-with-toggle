import React from "react";
import './styles/App.css'
import Toggle from "./components/Toggle";
import CardDisplay from "./components/CardDisplay";

function App() {
  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <Toggle />
      <CardDisplay />
    </div>
  );
}

export default App;

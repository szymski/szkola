import './App.css';
import { useState } from "react";

function App() {
  const [imie, setImie] = useState("");

  const onChange = event => {
    setImie(event.target.value);
  };

  return (
    <div className="App">
      <h1>To jest React!</h1>
      <input type="text" placeholder="Wpisz imie" onChange={onChange}/>
      <h3>Witaj {imie}!</h3>
    </div>
  );
}

export default App;

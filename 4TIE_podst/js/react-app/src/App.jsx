import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [tekst, setText] = useState("");

  const dodaj = () => {
    setTodos([...todos, tekst]);
    setText("");
  };

  const usun = (text) => {
    setTodos(todos.filter((todo) => todo !== text));
  };

  return (
    <div className="App">
      <header className="App-header">
        React TODO list
      </header>
      <ul>
        {todos.map((todo, index) => <TodoItem key={index} text={todo} onRemove={(text) => usun(text)} />)}
      </ul>
      <input value={tekst} onChange={(e) => setText(e.target.value)} type="text" style={{width: "100%", marginBottom: "10px"}} />
      <button onClick={dodaj} style={{width: "100%"}} disabled={tekst.length == 0}><h3>Dodaj</h3></button>
    </div>
  );
}

function TodoItem({text, onRemove}) {
  return (
    <li>
      {text}
      <a onClick={() => onRemove(text)} href="#" style={{color: "red", marginLeft: "10px", textDecoration: "none"}}>X</a>
    </li>
  );
}

export default App;

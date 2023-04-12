import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function TodoApp() {
  const [tekst, setTekst] = useState("");
  const [todos, setTodos] = useState([]);

  const dodaj = () => {
    setTodos([...todos, tekst]);
    setTekst("");
  };

  return (
    <div className="App">
      <header className="App-header">
        React TODO list
      </header>

      <ul>
        {todos.map((todo, i) => <TodoItem key={i} value={todo} />)}
      </ul>

      <form onSubmit={e => e.preventDefault()}>
        <input type="text" value={tekst} onChange={e => setTekst(e.target.value)} />
        <button onClick={dodaj} disabled={tekst.length == 0}>Dodaj</button>
        <br/>
      </form>
    </div>
  );
}

const TodoItem = ({value}) => {
  return (
    <li>
      <span>{value}</span>
      <button>Usuń</button>
    </li>
  );
}

const MyComponent = () => {
  const [zmienna, setZmienna] = useState(0);

  const onClick = () => {
    setZmienna(zmienna + 1);
  };

  return (
    <div>
      <h3>My Component</h3>
      <h2>Kliknięcia: {zmienna}</h2>
      {zmienna % 2 == 0 ? <h2>Parzysta</h2> : <h2>Nieparzysta</h2>}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}



export default TodoApp;

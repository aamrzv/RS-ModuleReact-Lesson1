// Декларативный стиль
import logo from './logo.svg';
import './App.css';

// Декларативный стиль
function App() {
  // Декларативный стиль
  return (
    // Декларативный стиль
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          // Декларативный стиль
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          {new Date().getFullYear()}
        </p>
      </header>
    </div>
  );
}

// Декларативный стиль
export default App;

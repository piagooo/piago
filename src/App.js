import logo from './logo.svg';
import dog from './dog-cowboy.jpeg';
import './App.css';
import { createPortal } from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Making a website (February 11th, 2023)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Links
        </a>
        <img src = {dog} alt = "Dog Cowboy" height = {200}/>

        <button class= "button dog1" type = "button" onclick="alert('Hello');"> click here for more cowboys </button>
        
            
        
      </header>
    </div>
  );
}

export default App;

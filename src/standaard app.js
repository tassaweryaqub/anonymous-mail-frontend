// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter } from 'react-router-dom'; 
// import { AppBar } from '@material-ui/core';


function App() {

  /* state gebruiken, bijvoorbeeld : 
  
  const [count, setCounter] = useState   <- reserved keyword 
  */

  return (
    <BrowserRouter>
    <div className="App">
      <AppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;

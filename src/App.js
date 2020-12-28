import React from 'react'
import logo from './logo.svg';
import './App.css';
import Router from './router/r1'


function App() {
  // ? null/undefined/false 阻止渲染, 0 不行,会渲染 0 本身
  // if (true) return null

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre dangerouslySetInnerHTML={{ __html: `Edit <code>src/App.js</code> and save to reload` }} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Router ></Router>
      </header>
    </div>
  );
}


export default App;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    const dataUrl = 'https://storage.googleapis.com/armorblox-public/small.json';

    axios.get(dataUrl).then(res => {
      const data = res;

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Graph />
      </div>
    );
  }
}

export default App;

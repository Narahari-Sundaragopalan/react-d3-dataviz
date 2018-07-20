import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Graph from './components/Graph';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //const dataUrl = 'https://storage.googleapis.com/armorblox-public/small.json';

    // axios.get(dataUrl).then(res => {
    //   this.setState({ data: res.data});
    //   console.log(this.props.data);

    // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Email Data Visualization using D3 JS </h1>
        </header>
        <Graph />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Country from './Country';
//import State from './State';

class App extends Component {
  constructor(props) {
    super(props);
    this.State={currentCountry: ''};
  }

  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React UI</h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;

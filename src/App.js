import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Country';
import State from './State';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={currentCountry: ''};
  }

  handleChange = (e) => {
    this.setState({currentCountry: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React UI</h2>
        </div>
        <p className="App-intro">
          <Country handleChange={this.handleChange} />
          <State currentCountry={this.state.currentCountry} />
        </p>
      </div>
    );
  }
}

export default App;

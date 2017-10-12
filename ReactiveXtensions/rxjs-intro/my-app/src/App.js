import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.onIncClick = this.onIncClick.bind(this);
    this.onDecClick = this.onDecClick.bind(this);
    this.onResetClick = this.onResetClick.bind(this);
  }


  onIncClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  onDecClick() {
    this.setState({ counter: this.state.counter - 1 });
  }
  onResetClick() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="nbContent">{this.state.counter}</div>
        <button id="incrBtn" onClick={this.onIncClick}>+1</button>
        <button id="decrBtn" onClick={this.onDecClick}>-1</button>
        <button id="resetBtn" onClick={this.onResetClick}>Reset</button>
      </div>
    );
  }
}

export default App;

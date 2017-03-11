import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    }
  }

  updateCounter(event) {
    this.setState({
      counter: event.target.value.length
    });
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.updateCounter.bind(this)}></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;

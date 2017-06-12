import React, { Component } from 'react';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <h1>Hello World</h1>
        <p>test</p>
      </div>
    );
  }
}

export default App;

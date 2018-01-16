import React, { Component } from 'react';
import logo from './logo.svg';
import Button from './Button';
import './App.css';

import Cor from './Cor';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cor: 'black',
    }

    this.mudarCor = this.mudarCor.bind(this);
  }

  mudarCor() {
    this.setState({
      cor: 'white',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.mudarCor}>Mudar a cor!</button>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Cor cor={this.state.cor} />
        </p>
        <Button />
      </div>
    );
  }
}

export default App;

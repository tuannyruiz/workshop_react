import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button onClick={() => alert("Hey!")}>Click me!</button>
    )
  }
}

export default Button;

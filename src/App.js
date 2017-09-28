import React, { Component } from 'react';
import './App.css';

const classNames = require('classnames');

class Circle extends Component {
  render() {
    var classes = classNames(
      "circle",
      `circle--l${this.props.level}`,
      `circle--l${this.props.level}-${this.props.pos}`,
      {[`circle--l${this.props.level}-on`]: this.props.status === "on"}
    );
    return (
      <div className={ classes } onClick={this.props.onClick}></div>
    );
  }
}

class Board extends Component {
  handleClick(n) {
    console.log(n);
  }

  render() {
    return (
      <div className="Board">
        <Circle level="1" pos="t" status="on" onClick={()=>this.handleClick(1)} />
        <Circle level="1" pos="r" status="off" onClick={()=>this.handleClick(2)} />
        <Circle level="1" pos="b" status="off" onClick={()=>this.handleClick(3)} />
        <Circle level="1" pos="l" status="off" onClick={()=>this.handleClick(4)} />

        <Circle level="2" pos="tl" status="off" onClick={()=>this.handleClick(5)} />
        <Circle level="2" pos="tr" status="off" onClick={()=>this.handleClick(6)} />
        <Circle level="2" pos="br" status="off" onClick={()=>this.handleClick(7)} />
        <Circle level="2" pos="bl" status="off" onClick={()=>this.handleClick(8)} />

        <Circle level="3" pos="t" status="off" onClick={()=>this.handleClick(9)} />
        <Circle level="3" pos="r" status="off" onClick={()=>this.handleClick(10)} />
        <Circle level="3" pos="b" status="on" onClick={()=>this.handleClick(11)} />
        <Circle level="3" pos="l" status="off" onClick={()=>this.handleClick(12)} />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;

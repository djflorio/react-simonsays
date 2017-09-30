import React, { Component } from 'react';
import './App.css';
import Tone from 'tone';

const classNames = require('classnames');

class Circle extends Component {

  constructor() {
    super();
    this.state = {on: false};
    this.onClick = this.onClick.bind(this);
    this.synth = new Tone.Synth().toMaster();
  }

  onClick() {
    this.setState({on: true});
    this.props.onClick();
    this.synth.triggerAttackRelease("C4", "8n");
    setTimeout(function(){ this.setState({on: false}); }.bind(this), 600);
  }

  render() {
    var classes = classNames(
      "circle",
      `circle--l${this.props.level}`,
      `circle--l${this.props.level}-${this.props.pos}`,
      {[`circle--l${this.props.level}-on`]: this.state.on}
    );
    return (
      <div className={ classes } onClick={this.onClick}></div>
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
        <Circle level="1" pos="t" onClick={()=>this.handleClick(1)} />
        <Circle level="1" pos="r" onClick={()=>this.handleClick(2)} />
        <Circle level="1" pos="b" onClick={()=>this.handleClick(3)} />
        <Circle level="1" pos="l" onClick={()=>this.handleClick(4)} />

        <Circle level="2" pos="tl" onClick={()=>this.handleClick(5)} />
        <Circle level="2" pos="tr" onClick={()=>this.handleClick(6)} />
        <Circle level="2" pos="br" onClick={()=>this.handleClick(7)} />
        <Circle level="2" pos="bl" onClick={()=>this.handleClick(8)} />

        <Circle level="3" pos="t" onClick={()=>this.handleClick(9)} />
        <Circle level="3" pos="r" onClick={()=>this.handleClick(10)} />
        <Circle level="3" pos="b" onClick={()=>this.handleClick(11)} />
        <Circle level="3" pos="l" onClick={()=>this.handleClick(12)} />
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

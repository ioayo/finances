import React, { Component } from 'react';
import './App.css';

var arrayGoods = [
  {
    good: 'burger',
    cost: 200,
  },
  {
    good: 'car',
    cost: 20000,
  },
  {
    good: 'house',
    cost: 2000000,
  }
];

class FinanceItem extends Component {
  render() {
    return (
      <li>{this.props.cost}</li>
    );
  }
}

function tick() {
  return <FinanceItem cost={54} />
}

setInterval(tick, 1000);

class App extends Component {
  render() {
    return (
      <FinanceItem cost={54} />
    );
  }
}

export default App;

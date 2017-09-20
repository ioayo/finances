import React from 'react';
import PropTypes from 'prop-types';
import FinanceList from './components/financeList'
import FutureTimer from './components/future-timer'

const PERSONS = [
    {
        name: 'Студент',
        money: 5000
    },
    {
        name: 'Продавец-консультант',
        money: 25000
    },
    {
		name: 'Инженер',
		money: 80000
    },
    {
        name: 'Депутат Госдумы',
        money: 330000
    },
    {
        name: 'Долларовый миллионер',
        money: 25000000,
    },
    {
        name: 'Bill Gates',
        money: 16397121600

    }    
]

const GOODS = [
    {
        name: 'Гамбургер',
        price: 200,
        imgSrc: '004-hamburger'
    },
    {
        name: 'iPhone',
        price: 30000,
        imgSrc: '003-iphone'
    },
    {
        name: 'Тачка',
        price: 300000,
        imgSrc: '002-automobile'
        
    },
    {
        name: 'Дом',
        price: 2000000,
        imgSrc: '001-home'
        
    }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setTimer = this.setTimer.bind(this);
    this.secondsToString = this.secondsToString.bind(this);
    this.toTheFuture = this.toTheFuture.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      elapsedTime: 0,
      previousTime: new Date().getTime(),
      future: {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0
      }
    }
  }

  setTimer() {
    var now = Date.now();
    this.setState({
      previousTime: now,
      elapsedTime: this.state.elapsedTime + (now - this.state.previousTime), 
    })
  }

  secondsToString(seconds) {
    var numdays = Math.floor(seconds / 86400);
    var numhours = Math.floor((seconds % 86400) / 3600);
    var numminutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var numseconds = ((seconds % 86400) % 3600) % 60;
    return numdays + " Дней " + numhours + " Часов " + numminutes + " Минут " + numseconds + " Секунд";
  }
  
  handleChange(e){
    const future = this.state.future;
    const prop = e.target.name;
    future[prop] = e.target.value;
    this.setState({
      future: future
    })
  }  //
  toTheFuture(e) {
    e.preventDefault();
    const future = this.state.future;
    console.log(future);
    const secondsValue = (future.years * 31104000 + future.months * 2592000 + future.days * 86400 + future.hours * 3600 + future.minutes * 60) * 1000;
    this.setState({
      elapsedTime: secondsValue
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.setTimer, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    var seconds = Math.floor(this.state.elapsedTime / 1000);
    const now = new Date();
    return (
        <div className="container">
            <h1 className="title">{this.props.title}</h1>
            <h2 className="timer">Прошло {this.secondsToString(seconds)}</h2>
            <FutureTimer toTheFuture={this.toTheFuture} handleChange={this.handleChange} />
            <FinanceList time={this.state.elapsedTime} persons={PERSONS} goods={GOODS} />
        </div>
    );
  }
} 

export default App;
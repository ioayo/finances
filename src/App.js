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
        years: '',
        months: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
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
    const numyears = Math.floor(seconds / 31536000);
    const nummonths = Math.floor((seconds % 31536000) / 2628000);
    const numdays = Math.floor(((seconds % 31536000) % 2628000) / 87600);
    const numhours = Math.floor((seconds % 87600) / 3600);
    const numminutes = Math.floor(((seconds % 87600) % 3600) / 60);
    const numseconds = ((seconds % 87600) % 3600) % 60;
    return numyears + " Лет "  + nummonths + " Месяцев " + numdays + " Дней " + numhours + " Часов " + numminutes + " Минут " + numseconds + " Секунд";
  }
  
  handleChange(e){
    let future = this.state.future;
    let key = e.target.name;
    future[key] = e.target.value;
    this.setState({future: future});
  } 

  
  toTheFuture(e) {
    e.preventDefault();
    const future = this.state.future;
    for (let key in future) {
      if (!future[key]) future[key] = 0
    }
    const secondsValue = (future.years * 31536000 + future.months * 2628000 + future.days * 87600 + future.hours * 3600 + future.minutes * 60) * 1000;
    this.setState({
      elapsedTime: secondsValue,
      future: {
        years: '',
        months: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
      }
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
            <FutureTimer toTheFuture={this.toTheFuture} handleChange={this.handleChange} time={this.state.future}/>
            <FinanceList time={this.state.elapsedTime} persons={PERSONS} goods={GOODS} />
        </div>
    );
  }
} 

export default App;
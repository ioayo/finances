import React from 'react';
import FinanceList from './components/financeList';
import FutureTimer from './components/future-timer';
import AddPerson from './components/addperson';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setTimer = this.setTimer.bind(this);
    this.secondsToString = this.secondsToString.bind(this);
    this.toTheFuture = this.toTheFuture.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      elapsedTime: 0,
      previousTime: new Date().getTime(),
      future: {
        years: '',
        months: '',
        days: '',
        hours: '',
        minutes: ''
      },
      newPerson: {},
      PERSONS: [
        {
            name: 'Продавец-консультант',
            money: 25000
        },
        {
            name: 'Депутат Госдумы',
            money: 330000
        },
        {
            name: 'Bill Gates',
            money: 16397121600

        }    
      ],
      GOODS: [
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
    }
  }

  setTimer() {
    var now = Date.now();
    this.setState({
      previousTime: now,
      elapsedTime: this.state.elapsedTime + (now - this.state.previousTime), 
    })
  }

  secondsToString(s) {
    // const numyears = Math.floor(seconds / 31536000);
    // const nummonths = Math.floor((seconds % 31536000) / 2628000 );
    // const numdays = Math.floor(((seconds % 31536000) % 2628000 ) / 87600);
    // const numhours = Math.floor((((seconds % 31536000) % 2628000 ) % 87600) / 3600);
    // const numminutes = Math.floor(((seconds % 87600) % 3600) / 60);
    // const numseconds = ((seconds % 8760) % 3600) % 60;
    
    let numseconds = s,
        numminutes = Math.floor(numseconds / 60),
        numhours   = Math.floor(numminutes / 60),
        numdays    = Math.floor(numhours / 24),
        nummonths  = Math.floor(numdays / 30),
        numyears   = Math.floor(nummonths / 12);

    numseconds %= 60;
    numminutes %= 60;
    numhours %= 24;
    numdays %= 30;
    nummonths %= 12;

    return numyears + " Лет "  + nummonths + " Месяцев " + numdays + " Дней " + numhours + " Часов " + numminutes + " Минут " + numseconds + " Секунд";
  }
  
  handleChange(e){
    const future = this.state.future;
    const prop = e.target.name;
    future[prop] = e.target.value;
    this.setState({
      future: future
    })
  }  
  
  toTheFuture(e) {
    e.preventDefault();
    const future = this.state.future;
    const secondsValue = (future.years * 31104000 + future.months * 2592000  + future.days * 86400 + future.hours * 3600 + future.minutes * 60) * 1000;
    this.setState({
      elapsedTime: secondsValue,
      future: {
        years: '',
        months: '',
        days: '',
        hours: '',
        minutes: ''
      }
    })
  }
  
  addPerson(obj) {
    let newPerson = obj, state = this.state.PERSONS;
    state.unshift(newPerson);
    this.setState({
      PERSONS: state,
      newPerson: {}
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
    return (
        <div className="container">
            <h1 className="title">{this.props.title}</h1>
            <h2 className="timer">Прошло {this.secondsToString(seconds)}</h2>
            <div className="forms">
              <AddPerson title="Добавить свои данные" addPerson={this.addPerson} persons={this.state.PERSONS} />
            <FutureTimer toTheFuture={this.toTheFuture} time={this.state.future} handleChange={this.handleChange} title="Вперед в будущее" descr="Тут можно установить дату и переместиться в ткани времени"/>
            </div>
            <FinanceList time={this.state.elapsedTime} persons={this.state.PERSONS} goods={this.state.GOODS} />
        </div>
    );
  }
} 

export default App;
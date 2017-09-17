import React from 'react';
import PropTypes from 'prop-types';
import FinanceList from './components/financeList'

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
  render() {
    return (
        <div className="container">
            <h1 className="title">{this.props.title}</h1>
            <FinanceList persons={PERSONS} goods={GOODS} />
        </div>
    );
  }
} 

export default App;
import React from 'react';
import PropTypes from 'prop-types';
import FinanceList from './components/financeList'
import { calculate } from './components/helpers';

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

class App extends React.Component {
  render() {
    return (
        <div className="container">
            <h1 className="title">{this.props.title}</h1>
            <FinanceList persons={PERSONS} />
        </div>
    );
  }
} 

export default App;
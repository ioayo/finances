import React from 'react';
import PropTypes from 'prop-types';
import FinanceList from './components/financeList'
import { calculate } from './components/helpers';

const PERSONS = [
    {
        name: 'President',
        money: 10000000
    },
    {
        name: 'Programmer',
        money: 150000
    },
    {
		name: 'NO',
		money: '0'
    }    
]

class App extends React.Component {
  render() {
    return (
        <div>
            <h1>OKKKK</h1>
            <FinanceList persons={PERSONS} />
        </div>
    );
  }
} 

export default App;
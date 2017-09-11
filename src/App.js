import React from 'react';
import PropTypes from 'prop-types';
import { calculate } from './components/helpers';

class App extends React.Component {
    render() {
        return (
          <FinanceItem goodsPrice={200} monthlyIncoming={30000} />
        );
  }
}

export default App;
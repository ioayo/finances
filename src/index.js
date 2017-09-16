import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Сколько бургеров вы зарабатываете в секунду?" />, document.getElementById('root'));
registerServiceWorker();

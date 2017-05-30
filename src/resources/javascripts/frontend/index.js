import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './react/App.jsx';

window.Redux = require('redux');

import Reducer from './root.redux';
window.store = Redux.createStore(Reducer);

ReactDOM.render(
    <Router>
        <App/>
    </Router>
, document.getElementById('app'));

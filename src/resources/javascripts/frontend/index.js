import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './react/App.jsx';
import Store from './root.redux';

window.store = Store;

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App/>
        </Router>
    </Provider>
, document.getElementById('app'));

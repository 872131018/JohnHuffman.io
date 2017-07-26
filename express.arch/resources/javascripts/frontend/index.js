/**
* Load and set Axios properties
*/
import axios from 'axios';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;
window.axios = axios;
/**
* React and app components
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './react/App.jsx';
/**
* Redux store and components
*/
import Store from './root.redux';
window.store = Store

ReactDOM.render(
    <Provider store={ Store }>
        <Router>
            <App/>
        </Router>
    </Provider>
, document.getElementById('app'));

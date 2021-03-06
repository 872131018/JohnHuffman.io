import axios from 'axios';
axios.defaults.baseURL = window.baseUrl;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-Token'] = document.head.querySelector('meta[name="csrf-token"]').content;
axios.defaults.headers.common['Authorization'] = `Bearer ${ document.querySelector('meta[name="api-token"]').content }`;
window.axios = axios;

import Store from './root.redux';
window.store = Store

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './react/App';

ReactDOM.render(
    <Provider store={ Store }>
        <App/>
    </Provider>
, document.getElementById('app'));

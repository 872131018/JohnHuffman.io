import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './pages/login/Page';

const props = (store) => {
    return {
        errors: store.ErrorStore
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("App Mounted!");
        /*
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/about/find`).then(response => {
            store.dispatch({ type: 'SET_ABOUTS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        */
    }

    render() {
        return (
            <Router>
                <Route exact path='/login' component={ Login }/>
            </Router>
        );
    }
}

export default connect(props)(App);

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

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Hero from './global/hero/Hero';
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
                <div>
                    <Hero/>
                    <Route exact path='/login' component={ Login }/>
                </div>
            </Router>
        );
    }
}

export default connect(props)(App);

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';
import Navigation from './global/navigation/Navigation';
import Hero from './global/Hero';
import Contact from './global/contact/Contact';
import Parallax from './global/Parallax';
import Home from './pages/home/Page';

const props = (store) => {
    return {
        loading: store.ServiceStore
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("App Mounted!");

        // @TODO analytic component mounting twice :/
        //store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/tool/find`).then(response => {
            store.dispatch({ type: 'SET_TOOLS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/language/find`).then(response => {
            store.dispatch({ type: 'SET_LANGUAGES', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/content/find`).then(response => {
            store.dispatch({ type: 'SET_CONTENTS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation/>
                    <Hero/>
                    { this.props.loading != 0 ?
                        <Loading/> :
                        <div>
                            <Route exact path='/' component={ Home }/>
                        </div>
                    }
                    <Parallax/>
                    <Contact/>
                </div>
            </Router>
        );
    }
}

export default connect(props)(App);

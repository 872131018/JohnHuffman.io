import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';
import Navigation from './global/navigation/Navigation';
import Hero from './global/hero/Hero';
import Contact from './global/contact/Contact';
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

        //store.dispatch({ type: 'SERVICE_LOADING' }); @TODO analytic component mounting twice :/
        axios.get(`${ window.baseUrl }/about/find`).then(response => {
            store.dispatch({ type: 'SET_ABOUTS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/interest/find`).then(response => {
            store.dispatch({ type: 'SET_INTERESTS', data: response.data });
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
                    <Contact/>
                </div>
            </Router>
        );
    }
}

export default connect(props)(App);

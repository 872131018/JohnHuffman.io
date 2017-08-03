import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';
import Navigation from './global/navigation/Navigation';
import Hero from './global/hero/Hero';
import Dashboard from './pages/dashboard/Page';
import Inquiries from './pages/inquiries/Page';

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
        /*
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/dashboard/find`).then(response => {
            store.dispatch({ type: 'SET_DASHBOARDS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        */
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/inquiry/find`).then(response => {
            store.dispatch({ type: 'SET_INQUIRIES', data: response.data });
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
                        <div className="w3-content">
                            <Route exact path='/admin' component={ Dashboard }/>
                            <Route exact path='/inquiries' component={ Inquiries }/>
                        </div>
                    }
                </div>
            </Router>
        );
    }
}

export default connect(props)(App);

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';
import Navigation from './global/navigation/Navigation';
import Hero from './global/hero/Hero';
import Dashboard from './pages/dashboard/Page';
import Inquiries from './pages/inquiries/Page';
import Contents from './pages/contents/Page';
import Form from './pages/contents/Form';

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

        //store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/analytic/find`).then(response => {
            store.dispatch({ type: 'SET_ANALYTICS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/inquiry/find`).then(response => {
            store.dispatch({ type: 'SET_INQUIRIES', data: response.data });
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
                        <div className="w3-container">
                            <Route exact path='/admin/dashboard' component={ Dashboard }/>
                            <Route exact path='/admin/inquiries' component={ Inquiries }/>
                            <Route exact path='/admin/contents' component={ Contents }/>
                            <Route exact path='/admin/content/:id/edit' component={ Form }/>
                        </div>
                    }
                </div>
            </Router>
        );
    }
}

export default connect(props)(App);

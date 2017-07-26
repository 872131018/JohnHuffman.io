import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';
import About from './about/About';
import Interests from './interests/Interests';
import Contact from './contact/Contact';

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
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/content/find`).then(response => {
            store.dispatch({ type: 'SET_ABOUTS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        store.dispatch({ type: 'SERVICE_LOADING' });
        axios.get(`${ window.baseUrl }/interest/find`).then(response => {
            store.dispatch({ type: 'SET_INTERESTS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });

        console.log("App Mounted!");
    }

    render() {
        return (
             this.props.loading != 0 ? (
                <div>
                    <Loading/>
                </div>
            ) : (
                <div>
                    <Navigation/>
                    <Hero/>
                    <About/>
                    <Interests/>
                    <Contact/>
                </div>
            )
        );
    }
}

export default connect(props)(App);

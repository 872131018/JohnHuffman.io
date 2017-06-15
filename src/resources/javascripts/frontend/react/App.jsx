import React from 'react';
import Loading from './Loading';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';
import About from './about/About';
import Interests from './interests/Interests';
import Contact from './contact/Contact';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        store.dispatch({ type: 'SERVICE_LOADING' });

        axios.get(window.location).then(response => {
            store.dispatch({ type: 'SET_CONTENTS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });

        console.log("App Mounted!");
    }

    render() {
        const isLoading = store.getState().ServiceStore.loading;

        return (
             isLoading ? (
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

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

        this.state = {
            loading: 0
        }
    }

    componentDidMount() {
        console.log("App Mounted!");
        this.setState( previousState => {
            return { loading: previousState.loading++ }
        });
        axios.get(window.base_url).then(response => {
            store.dispatch({ type: 'SET_CONTENTS', data: response.data });
            //this.loading--;
        });
    }

    render() {
        const isLoading = this.state.loading;

        return (
            <div>
                { isLoading ? (
                    <Loading/>
                ) : (

                    <Navigation/>
                    <Hero/>
                    <About/>
                    <Interests/>
                    <Contact/>
                )}
            </div>
        );
    }
}

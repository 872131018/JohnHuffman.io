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
        this.setState( state => {
            state.loading++;
            console.log(state.loading)
            return { loading: state.loading }
        });

        axios.get(window.location).then(response => {
            store.dispatch({ type: 'SET_CONTENTS', data: response.data });
            this.setState( state => {
                state.loading--;
                console.log(this.state.loading)
                return { loading: state.loading }
            });
        });
        console.log("App Mounted!");
    }

    render() {
        const isLoading = this.state.loading;

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

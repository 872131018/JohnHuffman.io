import React from 'react';
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
        console.log("App Mounted!");
        //this.loading++;
        axios.get(window.base_url).then(response => {
            store.dispatch({ type: 'SET_CONTENTS', data: response.data });
            //this.loading--;
        });
    }

    render() {
        return (
            <div>
                <Navigation/>
                <Hero/>
                <About/>
                <Interests/>
                <Contact/>
            </div>
        );
    }
}

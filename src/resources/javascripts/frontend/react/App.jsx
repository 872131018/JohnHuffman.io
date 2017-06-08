import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';
import About from './about/About';
import Interests from './interests/Interests';
import Contact from './contact/Contact';

export default class App extends React.Component {
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

    componentDidMount() {
        console.log("App Mounted!");
        /**
        * Load the contents of the app
        */
        //this.loading++;
        axios.get(window.base_url).then(response => {
            console.log(response.data)
            //store.dispatch({ type: 'FRONTEND_CONTENTS', data: response.data });
            //this.loading--;
        });

    }
}

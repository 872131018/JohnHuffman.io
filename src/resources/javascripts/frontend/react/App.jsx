import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Hero/>
            </div>
        );
    }
}

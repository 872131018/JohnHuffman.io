import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Hero from './hero/Hero';
import Home from './home/Home';
import About from './about/About';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Hero/>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
                </Switch>
            </div>
        );
    }
}

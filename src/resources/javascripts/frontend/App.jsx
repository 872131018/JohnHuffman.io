import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route path='/about' component={ About }/>
                </Switch>
            </div>
        );
    }
}

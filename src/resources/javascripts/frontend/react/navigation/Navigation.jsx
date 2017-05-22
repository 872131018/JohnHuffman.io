import React from 'react';
import Route from './Route';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="w3-top">
                <div className="w3-bar">
                    <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right">
                        <i className="fa fa-bars"></i>
                    </a>
                    <Route to="/"/>
                    <Route to="/about"/>
                </div>
            </div>
        );
    }
}

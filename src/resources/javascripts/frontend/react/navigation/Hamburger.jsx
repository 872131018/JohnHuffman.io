import React from 'react';
import { Link } from 'react-router-dom';

export default class Route extends React.Component {
    render() {
        return (
            <button className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium">
                <i className="fa fa-bars fa-2x"></i>
            </button>
        );
    }
}

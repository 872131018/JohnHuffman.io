import React from 'react';

export default class Hamburger extends React.Component {
    render() {
        return (
            <button className="w3-bar-item w3-button w3-right">
                <i className="fa fa-bars fa-2x"></i>
            </button>
        );
    }
}

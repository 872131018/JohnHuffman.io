import React from 'react';
import { Link } from 'react-router-dom';

export default class Route extends React.Component {
    render() {
        return (
            <Link to="{ this.props.route }" className="w3-bar-item w3-button w3-hide-small">
                <i className="fa fa-user"></i>{ this.props.route }
            </Link>
        );
    }
}

import React from 'react';
import { Link } from 'react-router-dom';

export default class Route extends React.Component {
    render() {
        return (
            <Link to={ this.props.route } className="w3-bar-item w3-button w3-right">
                <i className={ 'fa fa-' + this.props.icon + ' fa-2x w3-margin-right' }></i>{ this.props.name }
            </Link>
        );
    }
}

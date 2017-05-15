import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <li className="pure-menu-item">
                <Link className="pure-menu-link" to={ this.props.link }>{ this.props.link }</Link>
            </li>
        );
    }
}

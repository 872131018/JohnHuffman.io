import React from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends React.Component {
    render() {
        return (
            <div className="nav-left">
                <Link className="nav-item" to="/">
                    <span className="icon w3-margin-right">
                        <i className="fa fa-rocket"></i>
                    </span>
                    <span>Welcome.</span>
                </Link>
            </div>
        );
    }
}

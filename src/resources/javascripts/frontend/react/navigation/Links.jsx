import React from 'react';
import { Link } from 'react-router-dom';

export default class Links extends React.Component {
    render() {
        return (
            <div className="nav-right nav-menu">
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/about">About</Link>
                <span className="nav-item">
                    <a className="button is-info is-outlined is-inverted">
                        <span className="icon">
                            <i className="fa fa-github"></i>
                        </span>
                        <span>Download</span>
                    </a>
                </span>
            </div>
        );
    }
}

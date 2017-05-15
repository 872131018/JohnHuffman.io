import React from 'react';
import Link from './Link';

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a className="pure-menu-heading" href="">Your Site</a>
                <ul className="pure-menu-list">
                    <Link link="home"></Link>
                    <Link link="tour"></Link>
                </ul>
            </div>
        );
    }
}

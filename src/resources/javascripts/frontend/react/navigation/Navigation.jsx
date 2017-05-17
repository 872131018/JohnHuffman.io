import React from 'react';
import Logo from './Logo';
import Hamburger from './Hamburger';
import Links from './Links';


export default class Navigation extends React.Component {
    render() {
        return (
            <header className="nav w3-light-grey">
                <Logo/>
                <Links/>
                <Hamburger/>
            </header>
        );
    }
}

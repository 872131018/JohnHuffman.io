import React from 'react';
import Content from './Content';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="w3-display-container bgimg">
                <Content/>
            </div>
        );
    }
}
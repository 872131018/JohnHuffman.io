import React from 'react';
import Content from './Content';

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-display-container bgimg1">
                <Content/>
            </div>
        );
    }
}

export default Hero;

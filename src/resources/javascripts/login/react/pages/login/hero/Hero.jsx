import React from 'react';

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="w3-display-container bgimg">
                <div className="w3-display-middle w3-text-light-grey w3-center">
                    <h1>Administrative Login</h1>
                </div>
            </div>
        );
    }
}

export default Hero;

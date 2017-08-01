import React from 'react';

class Hamburger extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="w3-bar-item w3-button w3-right">
                <i className="fa fa-bars fa-2x"></i>
            </button>
        );
    }
}

export default Hamburger;

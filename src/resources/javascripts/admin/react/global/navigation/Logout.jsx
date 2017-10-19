import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="w3-bar-item w3-button w3-wide w3-right">
                <i className="fa fa-sign-out fa-2x w3-margin-right"/>Log Out
            </span>
        );
    }
}

export default Logout;

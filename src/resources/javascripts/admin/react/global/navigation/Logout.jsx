import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        axios.post(`${ window.baseUrl }/logout`).then(response => {
            window.location = '/';
        });
    }

    render() {
        return (
            <span className="w3-bar-item w3-button w3-wide w3-right">
                <i className="fa fa-sign-out fa-2x w3-margin-right"
                    onClick={ this.logout }></i>Log Out
            </span>
        );
    }
}

export default Logout;

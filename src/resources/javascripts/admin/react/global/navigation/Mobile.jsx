import React from 'react';
import Welcome from './Welcome';
import Logout from './Logout';
import Hamburger from './Hamburger';
import Route from './Route';

class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };

        this.openMenu = this.openMenu.bind(this);
        this.logout = this.logout.bind(this);
    }

    openMenu() {
        this.setState((previousState) => {
            return { toggle: !previousState.toggle };
        });
    }

    logout() {
        axios.post(`${ window.baseUrl }/logout`).then(response => {
            window.location = window.baseUrl;
        });
    }

    render() {
        return (
            <div>
                <Welcome/>
                <div onClick={ this.openMenu }>
                    <Hamburger/>
                </div>
                { this.state.toggle &&
                    <div className="w3-bar-block">
                        <Route route="/dashboard" name="Dashboard" icon="tachometer"/>
                        <Route route="/inquiries" name="Inquiries" icon="commenting-o"/>
                        <Route route="/contents" name="Contents" icon="newspaper-o"/>
                        <div onClick={ this.logout }>
                            <Logout/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Mobile;

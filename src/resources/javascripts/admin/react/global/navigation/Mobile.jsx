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
    }

    openMenu() {
        this.setState((previousState) => {
            return { toggle: !previousState.toggle };
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
                    <Logout/>
                    </div>
                }
            </div>
        );
    }
}

export default Mobile;

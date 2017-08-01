import React from 'react';
import Welcome from './Welcome';
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
                        <Route route="/" name="HOME" icon="home"/>
                        <Route route="/work" name="WORK" icon="cogs"/>
                        <Route route="/contact" name="CONTACT" icon="commenting-o"/>
                    </div>
                }
            </div>
        );
    }
}

export default Mobile;

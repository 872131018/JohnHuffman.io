import React from 'react';
import Route from './Route';
import Hamburger from './Hamburger';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.setState((previousState) => {
            console.log(this.state.toggle)
            return { toggle: !previousState.toggle };
        });
    }

    render() {
        return (
            <div>
                <div className="w3-top w3-bar w3-light-grey w3-opacity">
                    <span className="w3-bar-item w3-button w3-wide">
                        <i className="fa fa-hand-spock-o fa-2x w3-margin-right"></i>WELCOME.
                    </span>
                    <div className="w3-right w3-hide-small">
                        <Route route="home" icon="home"/>
                        <Route route="work" icon="bar-chart"/>
                        <Route route="pricing" icon="money"/>
                        <Route route="contact" icon="mobile-phone"/>
                    </div>
                    <div onClick={ this.openMenu }>
                        <Hamburger/>
                    </div>
                </div>
                { this.state.toggle == true &&
                    <div className="w3-sidebar w3-bar-block w3-black w3-hide-medium w3-hide-large">
                        <Route route="home" icon="home"/>
                        <Route route="work" icon="bar-chart"/>
                        <Route route="pricing" icon="money"/>
                        <Route route="contact" icon="mobile-phone"/>
                    </div>
                }
            </div>
        );
    }
}

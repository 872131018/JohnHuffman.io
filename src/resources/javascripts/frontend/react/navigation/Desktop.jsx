import React from 'react';
import Welcome from './Welcome';
import Route from './Route';

export default class Desktop extends React.Component {
    render() {
        return (
            <div className="w3-top w3-bar w3-light-grey w3-opacity">
                <Welcome/>
                <Route route="/" name="HOME" icon="home"/>
                <Route route="/work" name="WORK" icon="cogs"/>
                <Route route="/contact" name="CONTACT" icon="commenting-o"/>
            </div>
        );
    }
}

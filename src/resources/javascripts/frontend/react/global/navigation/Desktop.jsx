import React from 'react';
import Welcome from './Welcome';
import Route from './Route';

class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Welcome/>
                <Route route="/" name="Home" icon="home"/>
                <Route route="/work" name="Work" icon="cogs"/>
                <Route route="/contact" name="Contact" icon="commenting-o"/>
            </div>
        );
    }
}

export default Desktop;

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
                <Route route="/" name="HOME" icon="home"/>
                <Route route="/work" name="WORK" icon="cogs"/>
                <Route route="/contact" name="CONTACT" icon="commenting-o"/>
            </div>
        );
    }
}

export default Desktop;

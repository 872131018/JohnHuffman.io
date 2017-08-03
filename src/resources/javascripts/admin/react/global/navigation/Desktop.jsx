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
                <Route route="/admin" name="Dashboard" icon="tachometer"/>
                <Route route="/inquiries" name="Inquiries" icon="commenting-o"/>
            </div>
        );
    }
}

export default Desktop;

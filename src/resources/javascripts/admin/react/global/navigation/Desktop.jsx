import React from 'react';
import Welcome from './Welcome';
import Logout from './Logout';
import Route from './Route';

class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Welcome/>
                <Logout/>
                <Route route="/inquiries" name="Inquiries" icon="commenting-o"/>
                <Route route="/dashboard" name="Dashboard" icon="tachometer"/>
            </div>
        );
    }
}

export default Desktop;

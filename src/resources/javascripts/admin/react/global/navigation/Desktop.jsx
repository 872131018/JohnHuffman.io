import React from 'react';
import Welcome from './Welcome';
import Logout from './Logout';
import Route from './Route';

class Desktop extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
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
                <div onClick={ this.logout }>
                    <Logout/>
                </div>
                <Route route="/contents" name="Contents" icon="newspaper-o"/>
                <Route route="/inquiries" name="Inquiries" icon="commenting-o"/>
                <Route route="/dashboard" name="Dashboard" icon="tachometer"/>
            </div>
        );
    }
}

export default Desktop;

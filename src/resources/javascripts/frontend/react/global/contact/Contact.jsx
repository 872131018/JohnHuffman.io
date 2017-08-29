import React from 'react';
import GoogleMap from './GoogleMap';
import Form from './Form';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-light-grey">
                <div className="w3-content w3-padding-32">
                    <GoogleMap/>
                    <Form/>
                </div>
            </div>
        );
    }
}

export default Contact;

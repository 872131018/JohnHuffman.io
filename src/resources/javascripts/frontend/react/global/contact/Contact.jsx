import React from 'react';
import Content from './Content';
import Form from './Form';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container">
                <div className="w3-content">
                    <Content/>
                    <Form/>
                </div>
            </div>
        );
    }
}

export default Contact;

import React from 'react';
import Content from './Content';
import Form from './Form';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container">
                <div className="w3-section">
                    <Content/>
                    <Form/>
                </div>
            </div>
        );
    }
}

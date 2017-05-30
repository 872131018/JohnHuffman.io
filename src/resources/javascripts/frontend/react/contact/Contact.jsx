import React from 'react';
import Content from './Content';
import Form from './Form';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="w3-container w3-section">
                <Content/>
                <Form/>
            </div>
        );
    }
}

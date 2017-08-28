import React from 'react';
import Parallax from './Parallax';
import Content from './Content';
import Form from './Form';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-light-grey">
                <Parallax/>
                <div className="w3-content w3-padding-32">
                    <Content/>
                    <Form/>
                </div>
            </div>
        );
    }
}

export default Contact;

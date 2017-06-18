import React from 'react';
import Checkbox from './Checkbox';
import Input from './Input';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-half">
                <div className="w3-panel">
                    <Input label="Name"/>
                </div>
                <div className="w3-panel">
                    <Input label="Email"/>
                </div>
                <div className="w3-panel">
                    <Input label="Message"/>
                </div>
                <div className="w3-panel">
                    <Checkbox/>
                </div>
                <button className="w3-button w3-right w3-black">Send</button>
            </div>
        );
    }
}

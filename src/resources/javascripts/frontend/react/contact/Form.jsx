import React from 'react';

export default class Form extends React.Component {
    render() {
        return (
            <div className="w3-half">
                <div className="w3-section">
                    <label>Name</label>
                    <input className="w3-input" type="text" name="Name" required/>
                </div>
                <div className="w3-section">
                    <label>Email</label>
                    <input className="w3-input" type="text" name="Email" required/>
                </div>
                <div className="w3-section">
                    <label>Message</label>
                    <input className="w3-input" type="text" name="Message" required/>
                </div>
                <input className="w3-check" type="checkbox" checked name="Like"/>
                <label>I Like it!</label>
                <button className="w3-button w3-right w3-theme">Send</button>
            </div>
        );
    }
}

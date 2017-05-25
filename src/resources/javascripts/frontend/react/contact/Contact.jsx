import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="w3-container w3-section">
                <div className="w3-half w3-center">
                    <div className="w3-padding-16">
                        <span className="w3-xlarge w3-border-teal w3-bottombar">Contact</span>
                    </div>
                    <p><i className="fa fa-map-marker w3-xlarge"></i>  Denver, CO</p>
                    <p><i className="fa fa-phone w3-xlarge"></i>970-471-6603</p>
                    <p><i className="fa fa-envelope-o w3-xlarge"></i>j-huffman@hotmail.com</p>
                </div>
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
                    <button type="submit" className="w3-button w3-right w3-theme">Send</button>
                </div>
            </div>
        );
    }
}

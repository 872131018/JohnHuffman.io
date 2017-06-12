import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="w3-half">
                <div>
                    <label>Name</label>
                    <input className="w3-input" type="text" name="Name" required/>
                </div>
                <div>
                    <label>Email</label>
                    <input className="w3-input" type="text" name="Email" required/>
                </div>
                <div>
                    <label>Message</label>
                    <input className="w3-input" type="text" name="Message" required/>
                </div>
                <div>
                    <input className="w3-check" type="checkbox" name="Like"/>
                    <label>I Like it!</label>
                </div>
                <button className="w3-button w3-right w3-black">Send</button>
            </div>
        );
    }
}

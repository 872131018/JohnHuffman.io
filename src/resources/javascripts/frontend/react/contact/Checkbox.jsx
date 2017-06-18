import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log(this.state.value)
    }

    render() {
        return (
            <div className="w3-section">
                <div className="w3-display-inline-block demo">
                    <label className="switcher">
                        <input className="w3-hide" type="checkbox"/>
                        <div className="switcher__indicator"></div>
                        <span>I like JohnHuffman.io</span>
                    </label>
                </div>
            </div>
        );
    }
}

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
                <input className="w3-input" type="text"/>
                <label className="w3-left">{ this.props.label }</label>
            </div>
        );
    }
}

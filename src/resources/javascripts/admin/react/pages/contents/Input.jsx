import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    update(event) {
        store.dispatch({
            type: 'SET_INPUT',
            data: {
                key: this.props.label,
                value: event.target.value
            }
        });
    }

    render() {
        return (
            <div className="w3-section">
                <input className="w3-input" type="text"
                    value={ this.props.value }
                    onChange={ this.update }/>
                <label className="capitalize">{ this.props.label }</label>
            </div>
        );
    }
}

export default Input;

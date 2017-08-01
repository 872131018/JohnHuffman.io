import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-section">
                <input className="w3-input"
                    type={ this.props.type }
                    name={ this.props.name }
                    value={ this.props.value }
                    onChange={ (event) => store.dispatch({
                        type: `SET_${ this.props.label.toUpperCase() }`,
                        data: event.target.value }) }/>
                <label className="w3-left">{ this.props.label }</label>
            </div>
        );
    }
}

export default Input;

import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-section">
                <input className="w3-input" type="text"
                    value={ this.props.value }
                    onChange={ (event) => store.dispatch({
                        type: `SET_${ this.props.label.toUpperCase() }`,
                        data: event.target.value }) }/>
                <label className="w3-left">{ this.props.label }</label>
            </div>
        );
    }
}

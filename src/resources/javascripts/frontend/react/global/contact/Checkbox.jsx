import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-section">
                <div className="w3-display-inline-block demo">
                    <label className="switcher">
                        <input className="w3-hide" type="checkbox"
                            checked={ this.props.checked }
                            onChange={ (event) => store.dispatch({
                                type: 'SET_LIKES',
                                data: event.target.checked })}/>
                        <div className="switcher__indicator"></div>
                        <span>I like JohnHuffman.io</span>
                    </label>
                </div>
            </div>
        );
    }
}

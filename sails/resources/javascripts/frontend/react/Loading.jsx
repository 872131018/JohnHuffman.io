import React from 'react';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="atom">
                <div className="w3-aqua center"></div>
                <div className="w3-border-grey ring"></div>
                <div className="w3-border-grey ring"></div>
                <div className="w3-border-grey ring"></div>
                <div className="w3-aqua e"></div>
                <div className="w3-aqua e"></div>
                <div className="w3-aqua e"></div>
            </div>
        );
    }
}

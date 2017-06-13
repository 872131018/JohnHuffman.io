import React from 'react';

export default class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="atom">
                <div className="center"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="e"></div>
                <div className="e"></div>
                <div className="e"></div>
            </div>
        );
    }
}

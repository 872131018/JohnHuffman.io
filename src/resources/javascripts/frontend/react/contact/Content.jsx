import React from 'react';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-half w3-center">
                <div className="w3-panel">
                    <span className="w3-xxlarge w3-bottombar">Contact</span>
                </div>
                <div className="w3-panel">
                    <p><i className="fa fa-map-marker fa-2x w3-margin-right"></i>Denver, CO</p>
                </div>
                <div className="w3-panel">
                    <p><i className="fa fa-phone fa-2x w3-margin-right"></i>970-471-6603</p>
                </div>
                <div className="w3-panel">
                    <p><i className="fa fa-envelope-o fa-2x w3-margin-right"></i>j-huffman@hotmail.com</p>
                </div>
            </div>
        );
    }
}

import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
            <div className="w3-half w3-center">
                <span className="w3-xxlarge w3-bottombar w3-margin-right">Contact</span>
                <p><i className="fa fa-map-marker fa-2x w3-margin-right"></i>Denver, CO</p>
                <p><i className="fa fa-phone fa-2x w3-margin-right"></i>970-471-6603</p>
                <p><i className="fa fa-envelope-o fa-2x w3-margin-right"></i>j-huffman@hotmail.com</p>
            </div>
        );
    }
}

import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div className="bgimg-1 w3-display-container">
                <div className="w3-display-middle w3-text-light-grey w3-padding">
                    <h1>John Huffman</h1>
                    <h3>Human. Colorado. Earth.</h3>
                    <a href="#about" className="w3-button w3-light-grey w3-padding w3-large w3-opacity">Learn more and start today</a>
                </div>
                <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding:'24px 48px'}}>
                    <i className="fa fa-empire w3-hover-opacity"></i>
                    <i className="fa fa-apple w3-hover-opacity"></i>
                    <i className="fa fa-amazon w3-hover-opacity"></i>
                    <i className="fa fa-github-p w3-hover-opacity"></i>
                    <i className="fa fa-trello w3-hover-opacity"></i>
                    <i className="fa fa-rebel w3-hover-opacity"></i>
                </div>
            </div>
        );
    }
}

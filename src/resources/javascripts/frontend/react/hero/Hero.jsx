import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="bgimg-1 w3-display-container">
                <div className="w3-display-left w3-text-light-grey w3-padding">
                    <h1>John Huffman</h1>
                    <h3>Human. Colorado. Earth.</h3>
                    <a href="#about" className="w3-button w3-light-grey w3-padding w3-large w3-opacity">Learn more and start today</a>
                </div>
                <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding:'24px 48px'}}>
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                </div>
            </header>
        );
    }
}

import React from 'react';

export default class Content extends React.Component {
    render() {
        return (
            <div className="w3-display-middle w3-text-light-grey w3-center">
                <h1>John Huffman</h1>
                <h3>Human:Colorado:US:Earth</h3>
                <a className="w3-button w3-light-grey w3-opacity"
                    href="/images/JHuffmanResume.pdf"
                    download="JHuffmanResume.pdf">
                    <i className="fa fa-download w3-margin-right"></i>Download Resume
                </a>
            </div>
        );
    }
}

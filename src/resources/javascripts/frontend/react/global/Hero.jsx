import React from 'react';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.downloaded = this.downloaded.bind(this);
    }

    downloaded() {
        axios.post(`${ window.baseUrl }/analytic/store`, { page: 'Download' }).then(response => {
            //
        });
    }

    render() {
        return (
            <div className="w3-display-container w3-opacity-min parallaxHero">
                <div className="w3-display-middle w3-text-aqua w3-center">
                    <h1 className="w3-opacity-off">John Huffman</h1>
                    <h3 className="w3-opacity-off">Human : Colorado : Earth</h3>
                    <a className="w3-button w3-light-grey w3-opacity"
                        href="/images/JHuffmanResume.pdf"
                        download="JHuffmanResume.pdf"
                        onClick={ this.downloaded }>
                        <i className="fa fa-download w3-margin-right"></i>Download Resume
                    </a>
                </div>
            </div>
        );
    }
}

export default Hero;

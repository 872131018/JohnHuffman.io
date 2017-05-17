import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <section className="hero is-medium is-primary">
                    <div className="hero-body container has-text-centered">
                            <h1 className="w3-text-white">I am John Huffman</h1>
                            <h3 className="w3-text-white">This is my webpage.</h3>
                            <a className="button is-outlined">
                                <span className="icon">
                                    <i className="fa fa-download"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </div>
                </section>
            </div>
        );
    }
}

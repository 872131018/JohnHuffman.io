import React from 'react';
import { connect } from 'react-redux';

const props = (store) => {
    return {
        contents: store.ContentStore
    };
};

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-section">
                <div className="w3-center">
                    <h1>ABOUT</h1>
                    <div>
                        <div className="w3-quarter" onClick={ this.openMenu }>
                            <i className="fa fa-heartbeat fa-3x"></i>
                            <p>{ this.props.contents[0].header }</p>
                            <p>{ this.props.contents[0].content }</p>
                        </div>
                        <div className="w3-quarter">
                            <i className="fa fa-rebel fa-3x"></i>
                            <p>{ this.props.contents[1].header }</p>
                            <p>{ this.props.contents[1].content }</p>
                        </div>
                        <div className="w3-quarter">
                            <i className="fa fa-linux fa-3x"></i>
                            <p>{ this.props.contents[2].header }</p>
                            <p>{ this.props.contents[2].content }</p>
                        </div>
                        <div className="w3-quarter">
                            <i className="fa fa-rocket fa-3x"></i>
                            <p>{ this.props.contents[3].header }</p>
                            <p>{ this.props.contents[3].content }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(props)(About);

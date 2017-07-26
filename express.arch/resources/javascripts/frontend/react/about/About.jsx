import React from 'react';
import { connect } from 'react-redux';
import Sections from './Sections';

const props = (store) => {
    return {
        contents: store.ContentStore.about
    };
};

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container">
                <div className="w3-section w3-center">
                    <h1>ABOUT</h1>
                    <Sections contents={ this.props.contents }/>
                </div>
            </div>
        );
    }
}

export default connect(props)(About);

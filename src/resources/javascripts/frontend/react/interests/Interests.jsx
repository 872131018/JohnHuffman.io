import React from 'react';
import { connect } from 'react-redux';
import List from './List';

const props = (store) => {
    return {
        contents: store.ContentStore.interests
    };
};

class Interests extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-light-grey">
                <div className="w3-section w3-center">
                    <h1>INTERESTS</h1>
                    <List contents={ this.props.contents }/>
                </div>
            </div>
        );
    }
}

export default connect(props)(Interests);

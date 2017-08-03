import React from 'react';
import { connect } from 'react-redux';
import Interest from './Interest';

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
        const interests = this.props.contents.map((content) => {
            return (
                <div className="w3-panel"
                    key={ content.id.toString() }>
                    <Interest content={ content }/>
                </div>
            );
        });

        return (
            <div className="w3-container w3-light-grey">
                <div className="w3-content w3-center">
                    <h1>INTERESTS</h1>
                    { interests }
                </div>
            </div>
        );
    }
}

export default connect(props)(Interests);

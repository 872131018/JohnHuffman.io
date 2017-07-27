import React from 'react';
import { connect } from 'react-redux';
import Section from './Section';

const props = (store) => {
    return {
        contents: store.ContentStore.abouts
    };
};

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sections = this.props.contents.map((content) => {
            return <Section key={ content.id.toString() } content={ content }/>;
        });

        return (
            <div className="w3-container">
                <div className="w3-section w3-center">
                    <h1>ABOUT</h1>
                    { sections }
                </div>
            </div>
        );
    }
}

export default connect(props)(About);

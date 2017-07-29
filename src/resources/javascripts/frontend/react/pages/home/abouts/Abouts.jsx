import React from 'react';
import { connect } from 'react-redux';
import About from './About';

const props = (store) => {
    return {
        contents: store.ContentStore.abouts
    };
};

class Abouts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const abouts = this.props.contents.map((content) => {
            return <About key={ content.id.toString() } content={ content }/>;
        });

        return (
            <div className="w3-container">
                <div className="w3-section w3-center">
                    <h1>ABOUT</h1>
                    { abouts }
                </div>
            </div>
        );
    }
}

export default connect(props)(Abouts);

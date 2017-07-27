import React from 'react';
import { connect } from 'react-redux';
import About from './about/About';
import Interests from './interests/Interests';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <About/>
                <Interests/>
            </div>
        );
    }
}

export default Page;

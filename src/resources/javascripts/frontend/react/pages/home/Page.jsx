import React from 'react';
import { connect } from 'react-redux';
import Abouts from './abouts/Abouts';
import Interests from './interests/Interests';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Abouts/>
                <Interests/>
            </div>
        );
    }
}

export default Page;

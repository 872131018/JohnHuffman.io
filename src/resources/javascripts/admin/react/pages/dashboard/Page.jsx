import React from 'react';
import LineGraph from './LineGraph';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Analytics:</h3>
                <LineGraph></LineGraph>
            </div>
        );
    }
}

export default Page;

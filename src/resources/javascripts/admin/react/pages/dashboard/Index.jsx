import React from 'react';
import VisitGraph from './VisitGraph';
import DownloadGraph from './DownloadGraph';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Analytics:</h3>
                <VisitGraph/>
                <DownloadGraph/>
            </div>
        );
    }
}

export default Page;

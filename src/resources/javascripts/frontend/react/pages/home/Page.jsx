import React from 'react';
import Abouts from './abouts/Abouts';
import Interests from './interests/Interests';
import Analytics from '../../global/Analytics';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Abouts/>
                <Interests/>
                <Analytics page="Home"></Analytics>
            </div>
        );
    }
}

export default Page;

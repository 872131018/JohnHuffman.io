import React from 'react';
import Abouts from './abouts/Abouts';
import Interests from './interests/Interests';

class Page extends React.Component {
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
import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

export default class Navigation extends React.Component {
    render() {
        return (
            <div>
                <div className="w3-hide-small">
                    <Desktop/>
                </div>
                <div className="w3-hide-medium w3-hide-large">
                    <Mobile/>
                </div>
            </div>
        );
    }
}

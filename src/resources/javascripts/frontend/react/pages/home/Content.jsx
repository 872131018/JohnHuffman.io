import React from 'react';
import { connect } from 'react-redux';

const props = (store) => {
    return {
        //contents: store.ContentStore.abouts
    };
};

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-pale-blue">
                <div className="w3-content w3-padding-32">
                    <div className="w3-section w3-center">
                        <h1><em>Passion - Determination - Ingenuity</em></h1>
                        <p>We have created a fictional "personal" website/blog, and our fictional character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="w3-section w3-center">
                        <div className="w3-half w3-padding">
                            <img className="w3-image w3-opacity w3-hover-opacity-off" src="/images/jamboree.jpg"/>
                        </div>
                        <div className="w3-half w3-padding">
                            <p>Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(props)(Content);

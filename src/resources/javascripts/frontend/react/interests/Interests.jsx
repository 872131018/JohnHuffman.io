import React from 'react';
import { connect } from 'react-redux';

const props = (store) => {
    return {
        contents: store.ContentStore.interests
    };
};

class Interests extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-light-grey">
                <div className="w3-section w3-center">
                    <h1>INTERESTS</h1>
                    <p>Laravel</p>
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'100%'}}>100%</div>
                    <p>Express/Sail/Meteor</p>
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'90%'}}>90%</div>
                    <p>React/Angular/Vue/Ember</p>
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'85%'}}>85%</div>
                    <p>Python Django/Flask</p>
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'100%'}}>100%</div>
                    <p>Ruby Rails/Sinatra</p>
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'70%'}}>70%</div>
                    <p>Golang</p>
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'80%'}}>80%</div>
                </div>
            </div>
        );
    }
}

export default connect(props)(Interests);

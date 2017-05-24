import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="w3-content w3-padding w3-center">
                <h1>INTERESTS</h1>
                <p className="w3-wide">Photography</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'95%'}}>95%</div>
                </div>
                <p className="w3-wide">Web Design</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'85%'}}>85%</div>
                </div>
                <p className="w3-wide">Photoshop</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:'80%'}}>80%</div>
                </div>
            </div>
        );
    }
}

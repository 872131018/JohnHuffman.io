import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div className="w3-content w3-padding w3-center">
                <h1>ABOUT</h1>
                <div>
                    <div className="w3-quarter">
                        <i className="fa fa-heartbeat w3-margin-bottom w3-jumbo"></i>
                        <p className="w3-large">Activination</p>
                        <p>I'm an Archer and practitioner of Aikido. I also like to fish, camp, play golf, and lift weights.</p>
                    </div>
                    <div className="w3-quarter">
                        <i className="fa fa-rebel w3-margin-bottom w3-jumbo w3-center"></i>
                        <p className="w3-large">Nerdificated</p>
                        <p>Talk to me about Star Wars, Dungeons and Dragons, Space, History... anything awesome really.</p>
                    </div>
                    <div className="w3-quarter">
                        <i className="fa fa-linux w3-margin-bottom w3-jumbo"></i>
                        <p className="w3-large">Animalifuscation</p>
                        <p>I'm a big fan of animals.  I have 2 cats but I like animals great and small.</p>
                    </div>
                    <div className="w3-quarter">
                        <i className="fa fa-rocket w3-margin-bottom w3-jumbo"></i>
                        <p className="w3-large">Technologicon</p>
                        <p>I'm a futurist and a transhumanist philosophically.  Basically I want a space ship and a robot arm.</p>
                    </div>
                </div>
            </div>
        );
    }
}

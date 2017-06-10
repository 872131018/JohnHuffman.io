import React from 'react';
import { connect } from 'react-redux';

const props = () => {
    return {
        contents: store.getState().contentStore
    };
};

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div className="w3-container w3-section">
                <div className="w3-center">
                    <h1>ABOUT</h1>
                    <div>
                        <div className="w3-quarter">
                            <i className="fa fa-heartbeat fa-3x"></i>
                            <p>Activination</p>
                            <p>I'm an Archer and practitioner of Aikido. I also like to fish, camp, play golf, and lift weights.</p>
                        </div>
                        <div className="w3-quarter">
                            <i className="fa fa-rebel fa-3x"></i>
                            <p>Nerdificated</p>
                            <p>Talk to me about Star Wars, Dungeons and Dragons, Space, History... anything awesome really.</p>
                        </div>
                        <div className="w3-quarter">
                            <i className="fa fa-linux fa-3x"></i>
                            <p>Animalifuscation</p>
                            <p>I'm a big fan of animals.  I have 2 cats but I like animals great and small.</p>
                        </div>
                        <div className="w3-quarter">
                            <i className="fa fa-rocket fa-3x"></i>
                            <p>Technologicon</p>
                            <p>I have interest in the philosophy of futurism and transhumanism.  Basically, I want a space ship and a robot arm.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(props)(About);

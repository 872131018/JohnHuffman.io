import React from 'react';
import { connect } from 'react-redux';
import Tool from './Tool';

const props = (store) => {
    return {
        tools: store.ToolStore.tools
    };
};

class Tools extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const tools = this.props.tools.map((tool) => {
            return <Tool key={ tool.id.toString() } tool={ tool }/>;
        });

        return (
            <div className="w3-container w3-pale-blue">
                <div className="w3-content w3-padding-32">
                    <div className="w3-section w3-center">
                        <h1>Developer Toolkit</h1>
                        { tools }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(props)(Tools);

import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-panel">
                <p>{ this.props.content.header }</p>
                <div className="w3-container w3-center w3-padding-small w3-grey" style={{ width: this.props.content.interests }}>{ this.props.content.interest}</div>
            </div>
        );
    }
}

export default List;

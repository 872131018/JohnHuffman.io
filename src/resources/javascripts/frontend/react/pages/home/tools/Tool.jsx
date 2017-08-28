import React from 'react';

class Tool extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-left w3-padding">
                <p>{ this.props.tool.header }</p>
                <i className={ `w3-jumbo ${ this.props.tool.icon }` }></i>
            </div>
        );
    }
    /*
    <div className="w3-quarter">
        <i className={ `fa ${ this.props.tool.icon } fa-3x` }></i>
        <p>{ this.props.tool.header }</p>
        <p>{ this.props.tool.icon }</p>
    </div>
    */
}

export default Tool;

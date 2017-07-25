import React from 'react';

class Section extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-quarter">
                <i className={ `fa ${ this.props.content.icon } fa-3x` }></i>
                <p>{ this.props.content.header }</p>
                <p>{ this.props.content.content }</p>
            </div>
        );
    }
}

export default Section;

import React from 'react';

class Sections extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sections = this.props.contents.map((content) => {
            return <div className="w3-quarter"
                        key={ content._id.toString() }>
                <i className={ `fa ${ content.icon } fa-3x` }></i>
                <p>{ content.header }</p>
                <p>{ content.content }</p>
            </div>;
        });
        console.log(sections)
        return (
            <div>
                { sections }
            </div>
        );
    }
}

export default Sections;

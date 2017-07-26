import React from 'react';
import Section from './Section';

class Sections extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sections = this.props.contents.map((content) => {
            return <Section key={ content.id.toString() } content={ content }/>;
        });

        return (
            <div className="w3-panel">
                { sections }
            </div>
        );
    }
}

export default Sections;

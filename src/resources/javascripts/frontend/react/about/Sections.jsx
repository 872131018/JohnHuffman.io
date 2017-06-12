import React from 'react';
import Section from './Section';

class Sections extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sections = this.props.contents.map((content) => {
            return <Section key={ content._id.toString() } content={ content }/>;
        });

        return (
            <div>
                { sections }
            </div>
        );
    }
}

export default Sections;

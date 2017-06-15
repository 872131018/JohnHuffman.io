import React from 'react';
import Interest from './Interest';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sections = this.props.contents.map((content) => {
            return <Section key={ content._id.toString() } content={ content }/>;
        });

        return (
            <div className="w3-panel">
                { sections }
            </div>
        );
    }
}

export default List;

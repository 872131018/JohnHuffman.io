import React from 'react';
import Interest from './Interest';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const interests = this.props.contents.map((content) => {
            return <Interest key={ content._id.toString() } content={ content }/>;
        });

        return (
            <div className="w3-panel">
                { interests }
            </div>
        );
    }
}

export default List;
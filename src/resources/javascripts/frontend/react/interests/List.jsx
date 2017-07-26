import React from 'react';
import Interest from './Interest';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const interests = this.props.contents.map((content) => {
            return (
                <div className="w3-panel"
                    key={ content.id.toString() }>
                    <Interest content={ content }/>
                </div>
            );
        });

        return (
            <div>
                { interests }
            </div>
        );
    }
}

export default List;

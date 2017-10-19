import React from 'react';
import { Link } from 'react-router-dom';

class Cancel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="w3-button w3-yellow" to={ this.props.route }>
                <i className="fa fa-times w3-margin-right"/>Cancel
            </Link>
        );
    }
}

export default Cancel;

import React from 'react';
import { Link } from 'react-router-dom';

class Edit extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="w3-button w3-blue" to={ this.props.route }>
                <i className="fa fa-pencil w3-margin-right"></i>EDIT
            </Link>
        );
    }
}

export default Edit;

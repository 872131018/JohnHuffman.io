import React from 'react';
import { Link } from 'react-router-dom';

class Create extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="w3-button w3-green" to={ this.props.route }>
                <i className="fa fa-plus w3-margin-right"></i>Create
            </Link>
        );
    }
}

export default Create;

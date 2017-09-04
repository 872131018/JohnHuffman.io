import React from 'react';
import { Link } from 'react-router-dom';

class Destroy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="w3-button w3-red w3-margin-left" to={ this.props.route }>
                <i className="fa fa-exclamation-triangle w3-margin-right"></i>DESTROY
            </Link>
        );
    }
}

export default Destroy;

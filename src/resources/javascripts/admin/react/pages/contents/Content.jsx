import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cells = this.props.headers.map((property) => {
            return (
                <div className="cell v-align w3-padding-16 w3-center">{ this.props.content[property] }</div>
            )
        });

        return (
            <div className="row w3-hover-black">
                { cells }
                <div className="cell v-align w3-padding-16 w3-center">EDIT</div>
                <div className="cell v-align w3-padding-16 w3-center">DESTROY</div>
            </div>
        );
    }
}

export default Content;

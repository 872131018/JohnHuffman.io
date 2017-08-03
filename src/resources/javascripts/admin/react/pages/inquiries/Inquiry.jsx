import React from 'react';

class Inquiry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row w3-hover-black">
                <div className="cell v-align w3-padding-16 w3-center">{ this.props.inquiry.name }</div>
                <div className="cell v-align w3-padding-16 w3-center">{ this.props.inquiry.email }</div>
                <div className="cell v-align w3-padding-16 w3-center">{ this.props.inquiry.message }</div>
                { this.props.inquiry.likes ? (
                    <div className="cell v-align w3-padding-16 w3-center">
                        <i className="fa fa-2x fa-thumbs-o-up"></i>
                    </div>
                ) : (
                    <div className="cell v-align w3-padding-16 w3-center">
                        <i className="fa fa-2x fa-thumbs-o-down"></i>
                    </div>
                ) }
            </div>
        );
    }
}

export default Inquiry;

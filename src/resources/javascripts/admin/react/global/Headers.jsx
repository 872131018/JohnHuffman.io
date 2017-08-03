import React from 'react';

class Headers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headers = this.props.headers.map((header) => {
            return (
                <div className="cell w3-center w3-padding"
                    key={ header }>{ header }
                </div>
            );
        });

        return (
            <div className="row w3-blue w3-text-white">
                { headers }
            </div>
        );
    }
}

export default Headers;

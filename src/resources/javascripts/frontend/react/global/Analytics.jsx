import React from 'react';

class Analytics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.post(`${ window.baseUrl }/analytic/store`, { page: this.props.page }).then(response => {
            //
        });
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default Analytics;

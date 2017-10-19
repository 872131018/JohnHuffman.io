import React from 'react';
import { connect } from 'react-redux';
import Chartist from 'chartist';

const props = (store) => {
    return {
        labels: store.DashboardStore.downloadLabels,
        series: store.DashboardStore.downloadSeries
    };
};

class DownloadGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Chartist.Line('#DownloadChart', {
            labels: this.props.labels,
            series: [this.props.series]
        });
    }

    render() {
        return (
            <div>
                <h3>Downloads Last 30 Days</h3>
                <div id="DownloadChart"/>
            </div>
        );
    }
}

export default connect(props)(DownloadGraph);

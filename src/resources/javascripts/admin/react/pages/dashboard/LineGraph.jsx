import React from 'react';
import { connect } from 'react-redux';
import Chartist from 'chartist';

const props = (store) => {
    return {
        labels: store.DashboardStore.labels,
        series: store.DashboardStore.series
    };
};

class LineGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Chartist.Line('#LineChart', {
            labels: this.props.labels,
            series: [this.props.series]
        });
    }

    render() {
        return (
            <div>
                <h3>Visits Last 30 Days</h3>
                <div id="LineChart"></div>
            </div>
        );
    }
}

export default connect(props)(LineGraph);

import React from 'react';
import { connect } from 'react-redux';
import Chartist from 'chartist';

const props = (store) => {
    return {
        labels: store.DashboardStore.visitLabels,
        series: store.DashboardStore.visitSeries
    };
};

class VisitGraph extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        new Chartist.Line('#VisitChart', {
            labels: this.props.labels,
            series: [this.props.series]
        });
    }

    render() {
        return (
            <div>
                <h3>Visits Last 30 Days</h3>
                <div id="VisitChart"/>
            </div>
        );
    }
}

export default connect(props)(VisitGraph);

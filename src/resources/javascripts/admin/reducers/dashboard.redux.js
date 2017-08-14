const initialState = {
    visitLabels: [],
    visitSeries: [],
    downloadLabels: [],
    downloadSeries: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_ANALYTICS':
            state.visitLabels = action.data.visit.labels;
            state.visitSeries = action.data.visit.series;
            state.downloadLabels = action.data.download.labels;
            state.downloadSeries = action.data.download.series;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));
}

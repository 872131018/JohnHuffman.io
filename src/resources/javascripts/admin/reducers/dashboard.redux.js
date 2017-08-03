const initialState = {
    labels: [],
    series: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_DASHBOARD':
            state.labels = action.data.labels;
            state.series = action.data.series;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));
}

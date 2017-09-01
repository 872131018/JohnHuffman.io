const initialState = {
    properties: [
        'key',
        'header',
        'content'
    ],
    contents: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_CONTENTS':
            state.contents = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));
}

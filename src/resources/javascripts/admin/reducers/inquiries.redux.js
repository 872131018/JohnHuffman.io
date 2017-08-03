const initialState = {
    properties: [
        'name',
        'email',
        'message',
        'likes'
    ],
    inquiries: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_INQUIRIES':
            state.inquiries = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));
}

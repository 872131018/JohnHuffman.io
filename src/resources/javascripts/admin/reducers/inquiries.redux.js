const initialState = {
    properties: [
        'name',
        'email',
        'message',
        'likes'
    ],
    inquiries: []
}

export default function(inquiries = initialState, action) {
    switch(action.type) {
        case 'SET_ABOUTS':
            contents.abouts = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(inquiries));
}

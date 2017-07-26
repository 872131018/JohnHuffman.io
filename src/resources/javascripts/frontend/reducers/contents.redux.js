const initialState = {
    abouts: [],
    interests: []
}

export default function(contents = initialState, action) {
    switch(action.type) {
        case 'SET_ABOUTS':
            contents.abouts = action.data;
            break;
        case 'SET_INTERESTS':
            contents.interests = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(contents));
}

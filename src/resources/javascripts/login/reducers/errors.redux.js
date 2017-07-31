const initialState = {
    errors: []
}

export default function(errors = initialState, action) {
    switch(action.type) {
        case 'SET_ERRORS':
            errors.abouts = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(errors));
}

const initialState = {
    errors: window.errors
}

export default function(errors = initialState, action) {
    switch(action.type) {
        default:
            break;
    }
    return JSON.parse(JSON.stringify(errors));
}

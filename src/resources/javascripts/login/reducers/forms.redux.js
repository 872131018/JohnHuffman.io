const initialState = {
    name: '',
    password: ''
}

export default function(form = initialState, action) {
    switch(action.type) {
        case 'SET_NAME':
            form.email = action.data;
            break;
        case 'SET_PASSWORD':
            form.password = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(form));
}

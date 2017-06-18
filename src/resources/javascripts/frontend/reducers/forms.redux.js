const initialState = {
    name: '',
    email: '',
    message: '',
    likes: false
}

export default function(forms = initialState, action) {
    switch(action.type) {
        case 'SET_NAME':
            forms.name = action.data;
            break;
        case 'SET_EMAIL':
            forms.email = action.data;
            break;
        case 'SET_MESSAGE':
            forms.message = action.data;
            break;
        case 'SET_LIKES':
            forms.likes = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(forms));
}

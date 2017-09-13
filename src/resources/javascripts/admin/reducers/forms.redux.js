const initialState = {
    key: '',
    header: '',
    content: ''
}

export default function(form = initialState, action) {
    switch(action.type) {
        case 'SET_FORM':
            form.key = action.data.key;
            form.header = action.data.header;
            form.content = action.data.content;
            break;
        case 'SET_INPUT':
            form[action.data.key] = action.data.value;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(form));
}

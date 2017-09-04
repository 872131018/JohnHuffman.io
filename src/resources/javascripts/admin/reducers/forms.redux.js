const initialState = {
    key: '',
    header: '',
    content: ''
}

export default function(form = initialState, action) {
    switch(action.type) {
        case 'SET_KEY':
            form.key = action.data;
            break;
        case 'SET_HEADER':
            form.header = action.data;
            break;
        case 'SET_CONTENT':
            form.content = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(form));
}

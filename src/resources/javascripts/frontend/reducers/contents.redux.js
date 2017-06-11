const initialState = [
    {
        header: '',
        content: ''
    },
    {
        header: '',
        content: ''
    },
    {
        header: '',
        content: ''
    },
    {
        header: '',
        content: ''
    }
];

export default function(contents = initialState, action) {
    switch(action.type) {
        case 'SET_CONTENTS':
            contents = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(contents));
}

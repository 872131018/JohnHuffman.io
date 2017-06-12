const initialState = {
    about: [
        {
            _id: 1,
            icon: '',
            header: '',
            content: ''
        },
        {
            _id: 2,
            icon: '',
            header: '',
            content: ''
        },
        {
            _id: 3,
            icon: '',
            header: '',
            content: ''
        },
        {
            _id: 4,
            icon: '',
            header: '',
            content: ''
        }
    ]
};

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

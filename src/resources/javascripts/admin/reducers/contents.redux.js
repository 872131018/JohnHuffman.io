const initialState = {
    properties: [
        'key',
        'header',
        'content'
    ],
    contents: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'SET_CONTENTS':
            state.contents = action.data;
            break;
        case 'NEW_CONTENT':
            for(let index in state.contents) {
                if(state.contents[index].id == action.data.id) {
                    state.contents.splice(index, 1, action.data);
                    break;
                }
            }
            //state.contents.push(action.data);
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(state));
}

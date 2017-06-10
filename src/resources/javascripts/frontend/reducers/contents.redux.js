export default function(contents = [], action) {
    switch(action.type) {
        case 'SET_CONTENTS':
            contents = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(contents));
}

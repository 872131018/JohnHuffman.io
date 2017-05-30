const initialState = {
    Announcement: {
        header: '',
        content: ''
    }
};

module.exports = function(contents = initialState, action) {
    switch(action.type) {
        case 'FRONTEND_CONTENTS':
            contents = action.data;
            break;
        default:
            break;
    }
    return JSON.parse(JSON.stringify(contents));
}

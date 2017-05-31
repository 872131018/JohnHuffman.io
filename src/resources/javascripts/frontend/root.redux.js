import { createStore, combineReducers } from 'redux';
import ContentStore from './reducers/contents.redux';

const reducers = combineReducers({
    ContentStore
});

export default createStore(reducers);

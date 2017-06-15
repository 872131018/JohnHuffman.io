import { createStore, combineReducers } from 'redux';
import ContentStore from './reducers/contents.redux';
import ServiceStore from './reducers/services.redux';

const reducers = combineReducers({
    ContentStore,
    ServiceStore
});

export default createStore(reducers);

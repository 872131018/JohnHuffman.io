import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
//import ContentStore from './reducers/contents.redux';

const reducers = combineReducers({
    ServiceStore,
});

export default createStore(reducers);

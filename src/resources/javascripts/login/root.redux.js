import { createStore, combineReducers } from 'redux';
import ErrorStore from './reducers/errors.redux';

const reducers = combineReducers({
    ErrorStore,
});

export default createStore(reducers);

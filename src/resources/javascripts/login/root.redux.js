import { createStore, combineReducers } from 'redux';
import ErrorStore from './reducers/errors.redux';
import FormStore from './reducers/forms.redux';

const reducers = combineReducers({
    ErrorStore,
    FormStore
});

export default createStore(reducers);

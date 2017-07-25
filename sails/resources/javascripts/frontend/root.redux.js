import { createStore, combineReducers } from 'redux';
import ContentStore from './reducers/contents.redux';
import ServiceStore from './reducers/services.redux';
import FormStore from './reducers/forms.redux';

const reducers = combineReducers({
    ContentStore,
    ServiceStore,
    FormStore
});

export default createStore(reducers);

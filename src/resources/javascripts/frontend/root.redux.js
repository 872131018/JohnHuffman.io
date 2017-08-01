import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
import ContentStore from './reducers/contents.redux';
import FormStore from './reducers/forms.redux';

const reducers = combineReducers({
    ServiceStore,
    ContentStore,
    FormStore
});

export default createStore(reducers);

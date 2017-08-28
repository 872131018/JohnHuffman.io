import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
import LanguageStore from './reducers/languages.redux';
import ToolStore from './reducers/tools.redux';
import FormStore from './reducers/forms.redux';

const reducers = combineReducers({
    ServiceStore,
    LanguageStore,
    ToolStore,
    FormStore
});

export default createStore(reducers);

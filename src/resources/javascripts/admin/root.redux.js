import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
import InquiryStore from './reducers/inquiries.redux';
import DashboardStore from './reducers/dashboard.redux';
import ContentStore from './reducers/contents.redux';
import FormStore from './reducers/forms.redux';

const reducers = combineReducers({
    ServiceStore,
    InquiryStore,
    DashboardStore,
    ContentStore,
    FormStore
});

export default createStore(reducers);

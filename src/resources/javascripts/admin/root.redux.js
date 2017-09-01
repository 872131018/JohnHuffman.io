import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
import InquiryStore from './reducers/inquiries.redux';
import DashboardStore from './reducers/dashboard.redux';
import ContentStore from './reducers/contents.redux';

const reducers = combineReducers({
    ServiceStore,
    InquiryStore,
    DashboardStore,
    ContentStore
});

export default createStore(reducers);

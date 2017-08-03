import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
import InquiryStore from './reducers/inquiries.redux';
import DashboardStore from './reducers/dashboard.redux';

const reducers = combineReducers({
    ServiceStore,
    InquiryStore,
    DashboardStore
});

export default createStore(reducers);

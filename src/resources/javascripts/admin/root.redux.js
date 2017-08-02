import { createStore, combineReducers } from 'redux';
import ServiceStore from './reducers/services.redux';
import InquiryStore from './reducers/inquiries.redux';

const reducers = combineReducers({
    ServiceStore,
    InquiryStore
});

export default createStore(reducers);

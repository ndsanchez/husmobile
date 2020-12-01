import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import assistanceReducer from './reducers/assistanceReducer';
import generalReducer from './reducers/generalReducer';
import loginReducer from './reducers/loginReducer';
import receiptReducer from './reducers/receiptReducer';

const reducers = combineReducers({
    assistanceReducer,
    generalReducer,
    loginReducer,
    receiptReducer,
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
    )
);

export default store;

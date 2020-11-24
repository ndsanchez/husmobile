import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './reducers/loginReducer';
import generalReducer from './reducers/generalReducer';
import assistanceReducer from './reducers/assistanceReducer';

const reducers = combineReducers({
    assistanceReducer,
    generalReducer,
    loginReducer,
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        (window as any).devToolsExtension ? (window as any).devToolsExtension() : f => f
    )
);

export default store;

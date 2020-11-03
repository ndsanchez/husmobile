import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import loginReducer from './login/reducer'
import thunk from 'redux-thunk';

const reducers = combineReducers({
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

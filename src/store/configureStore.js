import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger}from 'redux-logger';
import promiseMiddleware from './promiseMiddleware';
import asyncActionCallbackMiddleware from './asyncActionCallbackMiddleware';
import syncReducerToAsyncStorage from './syncReducerToAsyncStorage';
import reducers from './reducers';

const __DEV__ = process.env.NODE_ENV === 'development';
// const __DEV__ = true;

const logger = createLogger({
    predicate: (getState, action) => __DEV__,
    collapsed: true,
    duration: true
});

let middleWares = [
    thunkMiddleware,
    promiseMiddleware,
    asyncActionCallbackMiddleware,
    syncReducerToAsyncStorage
];

if (__DEV__) {
    middleWares.push(logger);
}


export default function configureStore(initialState) {
    const store = applyMiddleware(
        ...middleWares
        // )(createStore)(reducers, initialState);
    )(createStore)(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), initialState);
    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

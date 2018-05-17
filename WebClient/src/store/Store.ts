import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { IStoreState } from './IStore.state';
import rootReducer from './RootReducer';
import saga from './Saga';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

// Workaround for new version of redux: issue reactjs/redux#2740. 
// TypeScript declarations incompatible with Redux 4.0 #492

declare module 'redux' {
    export type GenericStoreEnhancer = any;
}

let store: Store<IStoreState>;

if (process.env.NODE_ENV === 'production') {
    store = createStore<IStoreState, any, any, any>(rootReducer, applyMiddleware(...middlewares));
} else {
    store = createStore<IStoreState, any, any, any>(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))
    );
}

sagaMiddleware.run(saga);

export default store;

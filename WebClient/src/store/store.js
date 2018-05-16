import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

if (process.env.NODE_ENV === 'production') {
    store = createStore(rootReducer);
} else {
    store = createStore(
        rootReducer,
        composeWithDevTools()
    );
}

export default store;
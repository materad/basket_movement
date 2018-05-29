import { combineReducers, Reducer } from 'redux';
import { mainViewportReducer } from '../containers/MainViewport/MainViewport.reducer';
import { navigationReducer } from '../containers/Navigation/Navigation.reducer';
import { IStoreState } from './IStore.state';

const rootReducer: Reducer<IStoreState> = combineReducers({
    mainPage: mainViewportReducer,
    navigation: navigationReducer
});

export default rootReducer;
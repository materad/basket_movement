import { combineReducers, Reducer } from 'redux';
import { mainPageReducer } from '../containers/MainPage/MainPage.reducer';
import { IStoreState } from './IStore.state';

const rootReducer: Reducer<IStoreState> = combineReducers({
    mainPage: mainPageReducer
});

export default rootReducer;
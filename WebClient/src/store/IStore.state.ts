import { IMainViewportState } from '../containers/MainViewport/IMainViewport.state';
import { INavigationState } from '../containers/Navigation/INavigation.state';

export interface IStoreState {
    mainPage: IMainViewportState;
    navigation: INavigationState;
}
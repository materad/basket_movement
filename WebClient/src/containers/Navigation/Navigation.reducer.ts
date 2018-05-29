import { INavigationState } from './INavigation.state';
import { NavigationActions } from './Navigation.actions';
import { NavigationConstants } from './Navigation.constants';

export const navigationReducer = (
    state: INavigationState = {
        isSidebarOpen: true
    },
    actions: NavigationActions): INavigationState => {
    switch (actions.type) {
        case NavigationConstants.TOGGLE_MENU:
            return {
                ...state,
                isSidebarOpen: state.isSidebarOpen = !state.isSidebarOpen
            };
        default:
            return state;
    }
};

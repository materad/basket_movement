import { NavigationConstants } from './Navigation.constants';

export interface INavigationMenuToggle {
    type: NavigationConstants.TOGGLE_MENU;
}

export const toggleMenu = (): INavigationMenuToggle => ({
    type: NavigationConstants.TOGGLE_MENU
});

export type NavigationActions = INavigationMenuToggle;
import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import Navbar from '../../components/Navigation/Navbar/Navbar.component';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar.component';
import { IStoreState } from '../../store/IStore.state';
import { INavigationProps } from './INavigation.props';
import { NavigationActions, toggleMenu } from './Navigation.actions';
import './Navigation.scss';

class Navigation extends React.Component<INavigationProps, {}> {
    public render() {
        return (
            <div>
                <Navbar toggleMenu={this.props.onToggleMenu} />
                <Sidebar isSidebarOpen={this.props.isSidebarOpen} />
            </div>
        );
    }
}

const mapStateToProps = (state: IStoreState) => {
    return {
        isSidebarOpen: state.navigation.isSidebarOpen
    };
};

const mapDispachToProps = (dispatch: Dispatch<NavigationActions>) => {
    return {
        onToggleMenu: () => dispatch(toggleMenu())
    };
};

export default connect(mapStateToProps, mapDispachToProps)(Navigation as any);
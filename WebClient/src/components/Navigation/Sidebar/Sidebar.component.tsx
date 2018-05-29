import * as React from 'react';
import './Sidebar.scss';

export interface ISidebarProps {
    isSidebarOpen: boolean;
}

const Sidebar = (props: ISidebarProps) => (
    <div className={props.isSidebarOpen ? 'sidenav sidenav__open' : 'sidenav sidenav__close'}>
        <h1/>
    </div>
);

export default Sidebar;
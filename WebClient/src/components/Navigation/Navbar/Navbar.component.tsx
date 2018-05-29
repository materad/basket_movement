import * as React from 'react';
import BurgerButton from './BurgerButton/BurgerButton.component';
import Logo from './Logo/Logo.component';

export interface INavbar {
    toggleMenu: () => void;
}

const Navbar = (props: INavbar) => {
    return (
        <div className="navbar">
                <Logo />
                <BurgerButton onToggleMenu={props.toggleMenu}/>
        </div>
    );
};

export default Navbar;
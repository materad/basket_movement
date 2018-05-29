import * as React from 'react';

interface IBurgerButtonProps {
    onToggleMenu: () => void;
}

const BurgerButton = (props: IBurgerButtonProps) => (
    <button className="navbar__button" type="submit" onClick={props.onToggleMenu}>
        <i className="navbar__button__icon fa fa-bars" /> Menu
    </button>
);

export default BurgerButton;
import * as React from 'react';
import * as logo from '../../../../utils/images/logo.svg';

const Logo = () => (
    <div className="navbar__logo__container">
        <img src={logo} width="40px" height="40px" />
    </div>
);

export default Logo;
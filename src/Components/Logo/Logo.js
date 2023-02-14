import React from 'react';
import publicLink from '../../utilites/publicLink';

const Logo = ({ className }) => {
    return (
        <div>
            <img className={`xl:h-[31px] ${className}`} src={publicLink('/nav-logo.png')} alt="logo" />

        </div>
    );
};

export default Logo;
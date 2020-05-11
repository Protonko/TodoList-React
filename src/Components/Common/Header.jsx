import React from 'react';
import Navbar from '@Components/Common/Navbar/Navbar';
import { NAVBAR_ITEMS } from '@/static/data-objects';

function Header() {
    return (
        <header className="header">
            <Navbar navbarItems={NAVBAR_ITEMS} />
        </header>
    )
}

export default Header;
import React from 'react';
import NavbarItem from './NavbarItem';
import { NAVBAR_ITEMS } from '@/static/data-objects';

function Navbar() {
    return (
        <div className="container">
            <nav className="navbar">
                <ul className="navbar__list">
                    {Object.values(NAVBAR_ITEMS).map((elem, index) => {
                        return (
                            <NavbarItem
                                key={elem + index}
                                title={elem}
                                link={elem}
                            />
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
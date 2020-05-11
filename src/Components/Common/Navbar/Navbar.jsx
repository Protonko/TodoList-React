import React from 'react';
import NavbarItem from './NavbarItem';

function Navbar(props) {
    const navbarItems = props.navbarItems;
    return (
        <div className="container">
            <nav className="navbar">
                <ul className="navbar__list">
                    {navbarItems.map((elem, index) => {
                        return (
                            <NavbarItem
                                key={elem.title + index}
                                title={elem.title}
                                link={elem.link}
                            />
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
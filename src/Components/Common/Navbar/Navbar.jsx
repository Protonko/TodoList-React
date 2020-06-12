import React from 'react';
import PropTypes from 'prop-types';

import NavbarItem from '@Components/Common/Navbar/NavbarItem';
import Container from '@Components/Common/Container';

function Navbar({ navbarItems }) {
    return (
        <Container>
            <nav className="navbar">
                <ul className="navbar__list">
                    {navbarItems.map((elem, index) => {
                        return (
                            <NavbarItem
                                key={index}
                                title={elem.title}
                                link={elem.link}
                            />
                        )
                    })}
                </ul>
            </nav>
        </Container>
    )
}

Navbar.propTypes = {
    navbarItems: PropTypes.array,
}

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';

function NavbarItem({ link, title }) {
    return (
        <li className="navbar__item">
            <a href={link}>
                {title}
            </a>
        </li>
    )
}

NavbarItem.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default NavbarItem;

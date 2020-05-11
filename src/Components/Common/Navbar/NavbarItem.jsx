import React from 'react';

function NavbarItem(props) {
    return (
        <li className="navbar__item">
            <a href={props.link}>{props.title}</a>
        </li>
    )
}

export default NavbarItem;
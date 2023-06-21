import React from 'react';
import { Link } from 'react-scroll';

export default function MenuItem({ name, Icon, classIcon, colorItem, to }) {
    return (
        <Link className="subMenu" to={to} spy={true} smooth={true} offset={-70} duration={500} activeClass="active">
            <Icon className={`icon icon${classIcon}`} style={{ color: colorItem }} />
            <span>{name}</span>
        </Link>
    );
}

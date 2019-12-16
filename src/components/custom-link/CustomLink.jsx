import React from 'react'
import {NavLink} from 'react-router-dom'
import classnames from 'classnames'

import style from './style.css'

const CustomLink = (props) => {
    const {to, name, exact, type} = props
    return (
        <NavLink
            to={to}
            exact={exact}
            className={classnames(style.customLink, style[type])}
            activeClassName={style.activeLink}
        >
            {name}
        </NavLink>
    )
}

export default CustomLink

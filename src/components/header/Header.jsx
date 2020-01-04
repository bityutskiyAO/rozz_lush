import React from 'react'
import CustomLink from "../custom-link/CustomLink";
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

import style from './style.css'

const links = [
    {
        to: '/services',
        name: 'Услуги',
    },
    {
        to: '/work-examples',
        name: 'Примеры работ',
    },
    {
        to: '/contacts',
        name: 'Контакты',
    }
]

const Header = (props) => {
    const {theme = 'whiteLink'} = props
    return (
        <div className={style.container}>
            <NavLink to='/'>
                <button className={`animated fadeIn ${style.logoButton} ${props.location.pathname === '/' ? null : style.blackLogoButton} ${style.animated}`}/>
            </NavLink>
            <div className={`animated fadeIn ${style.links} ${style.animated}`}>
                {links.map((link) => {
                    return (
                        <CustomLink
                            key={link.name}
                            to={link.to}
                            exact={true}
                            name={link.name}
                            type={theme}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default withRouter(Header)

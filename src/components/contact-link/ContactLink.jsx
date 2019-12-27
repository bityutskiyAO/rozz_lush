import React from 'react'

import style from './style.css'

const ContactLink = (props) =>{
    const {icon, link, additionalText} = props
    return (
        <div className={style.contactLinkContainer}>
            <img src='' className={`${style.icon} ${style[`icon-${icon}`]}`}/>
            <a href={link.url} className={style.link}>
                {link.text}
            </a>
            {additionalText &&
            <p className={style.additionalText}>{additionalText}</p>
            }
        </div>
    )
}

export default ContactLink

import React from 'react'

import style from './style.css'
import {ContactLink} from "../../components";

const contacts = [
    {
        icon: 'dikidi',
        additionalText: '(только запись)',
        link: {
            url: 'https://dikidi.online/256675',
            text: 'Через DIKIDI'
        }
    },
    {
        icon: 'whatsup',
        link: {
            url: 'https://wa.me/79853308320',
            text: 'Через WhatsApp'
        }
    },
    {
        icon: 'instagram',
        link: {
            url: 'https://www.instagram.com/rozz.lash/',
            text: 'Через Direct'
        }
    }
]
const Contacts = (props) => {
    return (
        <React.Fragment>
            <div className={style.backgroundImage}/>
            <div className={style.container}>
                <div className={`${style.contentBlock} animated slideInLeft`}>
                    <p className={style.contactsHeader}>
                        Вы можете записаться и проконсультироваться следующими способами
                    </p>
                    {contacts.map(contact => {
                        return (
                            <ContactLink
                                icon={contact.icon}
                                additionalText={contact?.additionalText}
                                link={contact.link}
                            />
                        )
                    })}
                </div>
                <div className={`${style.contentBlock} animated slideInRight`}>
                    <p className={style.contactsHeader}>
                        Примеры сообщения:
                    </p>
                    <p className={style.smsExample}>
                        Здравствуйте! Хочу записаться на наращивание ресниц 2D. Только не знаю какой изгиб и эффект,
                        помогите подобрать, пожалуйста
                    </p>
                    <p className={style.separator}>
                        или
                    </p>
                    <p className={style.smsExample}>
                        Добрый день! Хочу попробовать архитектуру и окрашивание бровей, но немного боюсь. Можете
                        подробнее рассказать про услугу?
                    </p>
                </div>
            </div>
            <div className={style.footer}>
                <p className={style.footerText}>
                    © 2019 ROZZ.LASH. ALL RIGHTS RESERVED.
                </p>
            </div>
        </React.Fragment>
    )
}

export default Contacts

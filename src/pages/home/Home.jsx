import React from 'react'

import style from './style.css'
import {services} from "../../constants";
import {CustomButton} from "../../components";

const Home = (props) => {
    const knowThePrice = () => {

    }
    const signUp = () => {

    }
    return (
        <div className={style.container}>
            <p className={style.homeHeader}>
                Эстетическая косметология Дарии Розлач
            </p>
            <div className={style.homeBody}>
                <p className={style.bodyHeader}>
                    Услуги:
                </p>
                {services.map(service => {
                    return (
                        <p className={style.service}>
                            {service}
                        </p>
                    )
                })}
            </div>
            <div className={style.footer}>
                <CustomButton
                    handleClick={signUp}
                    buttonText='Записаться'
                />
                <CustomButton
                    handleClick={knowThePrice}
                    buttonText='Узнать цены'
                />
            </div>
        </div>
    )
}

export default Home

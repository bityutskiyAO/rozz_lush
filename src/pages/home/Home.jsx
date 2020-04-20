import React from 'react'

import {services} from "../../constants";
import {CustomButton} from "../../components";
import classnames from 'classnames'

import style from './style.css'

const Home = (props) => {
    const knowThePrice = () => {

    }
    const signUp = () => {

    }
    return (
        <React.Fragment>
            <div className={style.backgroundImage}/>
            <div className={classnames(style.container, style.animatedHome)}>
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
        </React.Fragment>
    )
}

export default Home

import React from 'react'

import style from './style.css'
import {examples} from "../../constants"
import {CustomButton, WorkImage} from "../../components"


const WorkExamples = (props) => {

    const handleClick = () => {
        document.location.href = 'https://www.instagram.com/rozz.lash/'
    }
    return (
        <div className={style.container}>
            <div className={style.images}>
                {examples.map((example, id) => {
                    return (
                        <WorkImage
                            key={example.src}
                            {...example}
                        />
                    )
                })}
            </div>
            <div className={style.main}>
                <p className={style.mainText}>Больше работ в инстаграмме студии</p>
                <CustomButton
                    handleClick={handleClick}
                    buttonText="Перейти"
                />
            </div>
        </div>
    )
}

export default WorkExamples

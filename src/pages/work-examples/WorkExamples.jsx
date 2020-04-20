import React, {useEffect, useState} from 'react'

import style from './style.css'
import {examples} from "../../constants"
import {CustomButton, Loader, WorkImage} from "../../components"
import loadLogo from "../../icons/rozz-icon-animated.svg";


const WorkExamples = (props) => {

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const handleClick = () => {
        document.location.href = 'https://www.instagram.com/rozz.lash/'
    }
    return (
        <div className={style.container}>
            {isLoading
                ?
                <Loader
                    svg={loadLogo}
                />
                :
                <React.Fragment>
                    <div className={style.backgroundImage}/>
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
                    < div className={style.main}>
                        <p className={style.mainText}>Больше работ в инстаграмме студии</p>
                        <CustomButton
                            handleClick={handleClick}
                            buttonText="Перейти"
                        />
                    </div>
                </React.Fragment>
            }
        </div>
    )
}

export default WorkExamples

import React from 'react'

import style from './style.css'

const WithTiltBackgroundImage = ({children}) => {
    return (
        <div className={style.container}>
            <div className={style.trapeze}>

            </div>
            <div className={style.imageBackground}>

            </div>
            {children}
        </div>
    )
}

export default WithTiltBackgroundImage

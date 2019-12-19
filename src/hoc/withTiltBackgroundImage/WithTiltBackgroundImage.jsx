import React, {useEffect} from 'react'

import style from './style.css'

const WithTiltBackgroundImage = ({children}) => {
    // useEffect(() => {
    //     let imageBackground = document.getElementById('imageBackground')
    //     imageBackground.addEventListener('animationstart', () => {
    //         console.log('uuuuu')
    //     }, false)
    // }, [])

    return (
        <div className={style.container}>
            <div id='imageBackground' className={style.imageBackground}>

            </div>
            {children}
        </div>
    )
}

export default WithTiltBackgroundImage

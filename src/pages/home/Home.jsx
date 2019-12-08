import React from 'react'

import style from './style.css'
import WithTiltBackgroundImage from "../../hoc/withTiltBackgroundImage/WithTiltBackgroundImage";

const Home = (props) => {
    return (
        <WithTiltBackgroundImage>
            <div className={style.container}>
                <p>HERE</p>
            </div>
        </WithTiltBackgroundImage>
    )
}

export default Home

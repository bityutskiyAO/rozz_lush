import React from 'react'
import classnames from 'classnames'

import style from './style.css'

const Loader = (props) => {
    const { svg, type } = props
    return (
        <div className={style.loadContainer}>
            <img src={svg} alt="loading..." className={classnames(style.animatedLogo, type === 'heart' ? style.hearLoad : null)}/>
        </div>
    )
}

export default Loader

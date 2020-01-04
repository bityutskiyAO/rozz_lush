import React from 'react'
import rozzLushHeart from '../../icons/rozz_heart.svg'

import style from './style.css'

const WorkImage = (props) => {
    const {src, type, workDescriptions} = props
    return (
        <div className={style.flipContainer}>
        <div className={style.flipper}>
            <img src={require(`../../icons/${src}.svg`)} className={style.front} alt={type}/>
            <div className={style.back}>
                <h4 className={style.workDescriptionsTitle}>{workDescriptions.title}</h4>
                <div className={style.workDescription}>
                {workDescriptions.details.map(detail => {
                    return (
                        <span className={style.detailInfo}>{detail.id}: <strong>{detail.value}</strong></span>
                    )
                })}
                </div>
                <div className={style.heart}>
                    <img src={rozzLushHeart} alt="rozz_lush heart"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WorkImage

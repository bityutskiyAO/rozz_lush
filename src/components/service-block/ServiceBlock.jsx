import React from 'react'
import classnames from 'classnames'

import style from './style.css'

const ServiceBlock = (props) => {
    const {serviceDetails, active, type} = props
    return (
        <div className={classnames(active ? style.active : style.hidden)}>
            <div className={style.serviceInfo}>
                <p>{type}</p>
                {serviceDetails.details.map((detail) => {
                    return (
                        <p key={detail.key}>{detail.key}: <strong>{detail.value}</strong></p>
                    )
                })}
            </div>
            <img className={active ? style.serviceImageActive : style.serviceImageHidden } src={require(`../../icons/${props.src}.svg`)} alt={serviceDetails.type} />
        </div>
    )
}

export default ServiceBlock

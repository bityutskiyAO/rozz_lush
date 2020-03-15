import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import style from './style.css'

const ServiceBlock = (props) => {
    const {serviceDetails, active, type, classname} = props

    // const onAnimationEnd = () => {
    //     const service = document.getElementById('serviceElement')
    //     console.log(service.classList)
    //     service.classList.remove(style[classname])
    //     console.log(service.classList)
    // }

    return (
        <div id="serviceElement" className={classnames(active ? style.active : style.hidden, style[classname])}>
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

ServiceBlock.propTypes = {
    serviceDetails: PropTypes.object.isRequired,
    active: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired
};


export default ServiceBlock

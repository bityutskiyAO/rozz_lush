import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import style from './style.css'

const ServiceBlock = (props) => {
    const {serviceDetails, type } = props
    return (
        <div id="serviceElement" className={style.serviceElement}>
            <div className={style.serviceInfo}>
                <p>{type}</p>
                {serviceDetails.details.map((detail) => {
                    return (
                        <p key={detail.key}>{detail.key}: <strong>{detail.value}</strong></p>
                    )
                })}
            </div>
            <img className={style.serviceImage} src={require(`../../icons/${props.src}.svg`)}
                 alt={serviceDetails.type}/>
        </div>
    )
}

ServiceBlock.propTypes = {
    serviceDetails: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    classname: PropTypes.string.isRequired
};


export default ServiceBlock

import React, {useState} from 'react'
import {ServiceBlock} from '../../components'
import CustomLink from "../../components/custom-link/CustomLink";
import {providedServices} from "../../constants";

import backArrow from '../../icons/backArrow.svg'
import frontArrow from '../../icons/frontArrow.svg'

import style from './style.css'

const navigations = [
    {
        to: '',
        name: 'Ресницы'
    },
    {
        to: '',
        name: 'Брови'
    },
    {
        to: '',
        name: 'Make Up'
    },
]


const Services = (props) => {
    const [serviceArray, setServiceArray] = useState(providedServices)
    const [hiddenLeftService, setHiddenLeftService] = useState(serviceArray[0] ?
                                                            { service: serviceArray[0], id: 0 } : null)
    const [activeService, setActiveService] = useState(serviceArray[1] ?
                                                            { service: serviceArray[1], id: 1 } : { service: serviceArray[0], id: 0 })
    const [hiddenRightService, setHiddenRightService] = useState(serviceArray[2] ?
                                                            { service: serviceArray[2], id: 2 } : serviceArray.length > 1 ?
                                                            { service: serviceArray[0], id: 1 } : null)

    const handleBackClick = () => {
        const serviceLength = serviceArray.length
        if(serviceLength > 1) {
            if (hiddenLeftService.id === 0) {
                setHiddenRightService({
                    service: activeService.service,
                    id: activeService.id
                })
                setActiveService({
                    service: hiddenLeftService.service,
                    id: hiddenLeftService.id
                })
                setHiddenLeftService({
                    service: serviceArray[serviceLength - 1],
                    id: serviceLength - 1
                })
            } else {
                setHiddenRightService({
                    service: activeService.service,
                    id: activeService.id
                })
                setActiveService({
                    service: hiddenLeftService.service,
                    id: hiddenLeftService.id
                })
                setHiddenLeftService({
                    service: serviceArray[hiddenLeftService.id - 1],
                    id: hiddenLeftService.id - 1
                })
            }
        }
    }

    const handleFrontClick = () => {
        const serviceLength = serviceArray.length
        if(serviceLength > 1) {
            if (hiddenRightService.id === serviceLength - 1) {
                setHiddenLeftService({
                    service: activeService.service,
                    id: activeService.id
                })
                setActiveService({
                    service: hiddenRightService.service,
                    id: hiddenRightService.id
                })
                setHiddenRightService({
                    service: serviceArray[0],
                    id: 0
                })
            } else {
                setHiddenLeftService({
                    service: activeService.service,
                    id: activeService.id
                })
                setActiveService({
                    service: hiddenRightService.service,
                    id: hiddenRightService.id
                })
                setHiddenRightService({
                    service: serviceArray[hiddenRightService.id + 1],
                    id: hiddenRightService.id + 1
                })
            }
        }
    }

    return (
        <div className={style.container}>
            <div className={style.navigationPanel}>
                {navigations.map(navigation => {
                    return (
                        <CustomLink
                            key={navigation.name}
                            to={navigation.to}
                            name={navigation.name}
                            exact={true}
                            type="blackLink"
                        />
                    )
                })}
            </div>
            <div className={style.backArrow}>
                <img src={backArrow} height="150px" alt="back arrow" onClick={handleBackClick}/>
            </div>
            <div className={style.sliderBlock}>
                <div className={style.leftHiddenService}>
                    { hiddenLeftService &&
                        <ServiceBlock
                            {...hiddenLeftService.service}
                            active={false}
                        />
                    }
                </div>
                <div className={style.activeService}>
                    <ServiceBlock
                        {...activeService.service}
                        active
                    />
                </div>
                <div className={style.rightHiddenService}>
                    {hiddenRightService &&
                        <ServiceBlock
                            {...hiddenRightService.service}
                            active={false}
                        />
                    }
                </div>
            </div>
            <div className={style.frontArrow}>
                <img src={frontArrow} height="150px" alt="front arrow" onClick={handleFrontClick}/>
            </div>

        </div>
    )
}

export default Services

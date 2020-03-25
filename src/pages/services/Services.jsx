import React, {useState} from 'react'
import classnames from 'classnames'

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

class Services extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            direction: -1
        }
    }

    componentDidMount() {
        const slider = document.getElementById('slider');
        slider.addEventListener('transitionend', () => {
            if (this.state.direction === 1) {
                slider.prepend(slider.lastElementChild);
            } else {
                slider.appendChild(slider.firstElementChild);
            }
            slider.style.transition = 'none';
            slider.style.transform = 'translate(0)';
            setTimeout(() => {
                slider.style.transition = 'all 2s';
            })
        }, false)
    }

    render() {

        const handleNextClick = () => {
            const carousel = document.getElementById('carousel');
            const slider = document.getElementById('slider');
            if (this.state.direction === 1) {
                this.setState({
                    direction: -1
                })
                slider.prepend(slider.lastElementChild);
            }
            carousel.style.justifyContent = 'flex-start';
            slider.style.transform = 'translate(-25%)';
        }

        const handlePrevClick = () => {
            const carousel = document.getElementById('carousel');
            const slider = document.getElementById('slider');
            if (this.state.direction === -1) {
                this.setState({
                    direction: 1
                })
                slider.appendChild(slider.firstElementChild);
            }
            carousel.style.justifyContent = 'flex-end';
            slider.style.transform = 'translate(25%)';
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
                <div className={style.carouselBlock}>
                    <div className={style.prev}>
                        <img
                            src={backArrow}
                            className={style.arrow}
                            alt="back arrow"
                            onClick={handlePrevClick}
                        />
                    </div>
                    <div className={style.carousel} id="carousel">
                        <div className={style.slider} id="slider">
                            {providedServices.map((service) => {
                                return (
                                    <div className={style.sliderBlock} id="sliderBlock">
                                        <div className={style.serviceElement}>
                                            <ServiceBlock
                                                {...service[0]}
                                            />
                                        </div>
                                        <div className={style.serviceElement}>
                                            <ServiceBlock
                                                {...service[1]}
                                            />
                                        </div>
                                        <div className={style.serviceElement}>
                                            <ServiceBlock
                                                {...service[2]}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={style.next}>
                        <img
                            src={frontArrow}
                            className={style.arrow}
                            alt="front arrow"
                            onClick={handleNextClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Services

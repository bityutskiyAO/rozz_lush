import React from 'react'
import {Header} from '../../components'

import style from './style.css'
import WithTiltBackgroundImage from "../withTiltBackgroundImage/WithTiltBackgroundImage";
import {withRouter} from "react-router";

const Layout = (props) => {
    const {children} = props
    return (
        <React.Fragment>
            {props.location.pathname === '/'
                ?
                <WithTiltBackgroundImage>
                    <div className={style.container}>
                        <Header/>
                        {children}
                    </div>
                </WithTiltBackgroundImage>
                :
                <div className={style.container}>
                    <Header
                        theme="blackLink"
                    />
                    <div className={style.childrenContainer}>
                        {children}
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default withRouter(Layout)

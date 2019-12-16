import React from 'react'

import style from './style.css'

const CustomButton = (props) => {
    const { handleClick, buttonText } = props
    return (
        <button
            className={style.button}
            onClick={handleClick}
        >
            {buttonText}
        </button>
    )
}

export default CustomButton

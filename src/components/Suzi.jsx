import React from 'react'

// let answer = 10;

export const Suzi = ({suzi, setSuzi}) => {

    const plus = () => {
        setSuzi(suzi+1);
    }

    return (
        <div onClick={()=>plus()}>
            {suzi}
            {/* {sinobu} */}
        </div>
    )
}

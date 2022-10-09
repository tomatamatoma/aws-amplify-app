import React from 'react'

export const Sinobu = ({sinobu, setSinobu}) => {

    const ero = (a) => {
        setSinobu(a);
    }

    const awa = (a) => {
        setSinobu(a)
    }

    return (
        <div className="hagetaka">
            {sinobu}
        
        <button onClick={()=>ero("ero")}>1</button>
        <button onClick={()=>awa("hage")}>2</button>
        </div>
    )
}

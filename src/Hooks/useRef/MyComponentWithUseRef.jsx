
import React, { useState, useEffect, useRef } from 'react'

function MyComponentWithUseRef() {

    const ref = useRef(0);   //current property set to 0

    useEffect(() => {
        console.log("component renders")
    })  //give [] dependecy array to prevent rerender

    function handleClick() {
        ref.current = ref.current + 1
        console.log(ref.current)
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default MyComponentWithUseRef


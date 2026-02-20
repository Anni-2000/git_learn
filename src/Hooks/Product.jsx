import React, { useEffect, useState } from 'react'
import "./Product.css"
function Product() {
const [state, setState] = useState(0)
useEffect(()=>{
console.log("Hello");

},[])
    function inc() {
        setState(state + 1)
    }

    return (
        <>
            <div className="main">
                <div className="incbox">
                    <h1>{state}</h1>
            <button onClick={inc}>inc</button>
            <div></div>
            <div></div>
                </div>
            </div>
        </>

    )
}

export default Product

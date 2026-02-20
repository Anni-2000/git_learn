import { useState } from "react"

function Usestate(props) {

    const [state, setState] = useState(0)

    function inc() {
        setState(state + 1)
    }

    function dec() {
        setState(state - 1)
    }

    return (
        <>
        <h1>{props.name}</h1>
            <h1>{state}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <div></div>
            <div></div>
        </>

    )
}

export default Usestate

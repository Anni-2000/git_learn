import { useContext } from "react"
import { createName } from "./CreateContext"

function Comp2() {

const { name, name2 } = useContext(createName)
  return (
    <div>
      <h1>{name}</h1>
      <h1>{name2}</h1>
    </div>
  )
}

export default Comp2

import Comp2 from "./Comp2"
import { createName } from "./CreateContext"
function Comp1() {

    let name = "Akhil"
    let name2 ="hello, "
  return (
    <div>
      <createName.Provider value={{name,name2}}>
        <Comp2/>
      </createName.Provider>
    </div>
  )
}

export default Comp1

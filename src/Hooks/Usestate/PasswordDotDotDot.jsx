import { useState } from "react"



function PasswordDotDotDot() {
    const [state, setState] = useState(false)
    function toggle(e) {
        e.preventDefault();
        setState(!state);
    }






    return (
        <div>
            <div className="login">
                <form>
                    <label>Password :</label>
                    <input id='pass' type={state == true ? "text" : "password"} placeholder="Enter Password"></input>
                    <br></br><br></br>
                    <button onClick={(e) => toggle(e)}>{state == true ? "Hide" : "Show"}</button>
                </form>
            </div>
        </div>
    )
}

export default PasswordDotDotDot

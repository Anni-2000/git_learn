import { useState } from "react"

function ConditionalRendering() {

const[state,setState]=useState(true)


function toggle(){
    setState(!state)
}

    function Login() {
        return (
            <>
                <h1>Login</h1>
                <form>
                    <div className="form-control">
                        <label>User Name :</label>
                        <input type="username" placeholder="Enter Username"></input>
                        <br></br>
                    </div>
                    <div className="form-control">
                        <br></br>
                        <label>Password :</label>
                        <input type="password" placeholder="Enter Password"></input>
                    </div>
                    <button>Submit</button>
                </form>
            </>
        )
    }


    function Reg() {
        return (
            <>
                <h1>reg</h1>
                <form>
                    <div className="form-control">
                        <label>User Name :</label>
                        <input type="username" placeholder="Enter Username"></input>
                        <br></br>
                    </div>
                    <div className="form-control">
                        <br></br>
                        <label>Password :</label>
                        <input type="password" placeholder="Enter Password"></input>
                    </div>
                    <div className="form-control">
                        <br></br>
                        <label>Email :</label>
                        <input type="email" placeholder="Enter Email"></input>
                    </div>
                    <button>Submit</button>
                </form>
            </>
        )
    }






    return (
        <div>

  {state == true ? <Login/>:<Reg/>}
  <button onClick={toggle}>{state == true? "Register":"Login"}</button>
        </div>
    )
}

export default ConditionalRendering

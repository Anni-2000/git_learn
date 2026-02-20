import React,{useState,useEffect} from 'react'

function MyComponentWithoutUseRef() {

    let[number,setNumber]=useState(0)


    useEffect(()=>{
        console.log("component renders")
    })  //give [] dependecy array to prevent rerender

 function handleClick(){
    setNumber(number+1)
 }

  return (
    <div>
        {number}
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

export default MyComponentWithoutUseRef
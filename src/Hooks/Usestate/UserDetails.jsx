import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserDetails() {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users/")
        .then((result) => {
                console.log(result);
                setData(result.data)
            })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <div>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.email}</h1>
      <h1>{data.phone}</h1>
      <h1>{data.username}</h1>
      <h1>{data.website}</h1>
      <h1>{data.company?.name}</h1>
      <h1>{data.company?.catchPhrase}</h1>
      <h1>{data.company?.bs}</h1>
    </div>
  )
}

export default UserDetails

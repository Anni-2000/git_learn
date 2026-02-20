import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/8")
            .then((result) => {
                console.log(result);
                setData(result.data)
            })
            .catch((error) => {
                console.log(error);

            })
    }, [])
    console.log(data);

    return (
        <div>
            <h1>{data.id}</h1>
            <h2>{data.title}</h2>
            <h3>{data.category}</h3>
            <h4>{data.description}</h4>
            <img src={data.image}></img>
            <h3>{data.price}</h3>
            <h2>{data.rating.count}</h2>
            <h2>{data.rating.rate}</h2>
        </div>
    )
}

export default Axios

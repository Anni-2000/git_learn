import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DummyJson() {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/recipes")
            .then((result) => {
                console.log(result.data);
                setData(result.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            <img src={data.image} style={{ width: "200px", height: "200px" }}></img>
            <h1>{data.prepTimeMinutes}</h1>
            <h1>{data.rating}</h1>
            <h1>{data.reviewCount}</h1>
            <h1>{data.servings}</h1>
            <h1>{data.userId}</h1>
            <h1>{data.caloriesPerServing}</h1>
            <h1>{data.cookTimeMinutes}</h1>
            <h1>{data.cuisine}</h1>
            <h1>{data.difficulty}</h1>
        </div>
    )
}

export default DummyJson

import { useEffect, useState } from "react"
import axios from 'axios'
import "./api.css"

function Api() {

    const api = "https://fakestoreapi.com/products"
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(api)
            setState(response.data)
        }

        fetchData()
    }, [])

    return (
        <div className="api-container">
            {state.map(x => (
                <div className="product-card" key={x.id}>
                    <h3 className="product-id">ID: {x.id}</h3>
                    <h2 className="product-title">{x.title}</h2>
                    <img className="product-image" src={x.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Api


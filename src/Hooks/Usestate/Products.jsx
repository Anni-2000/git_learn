import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/")
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
            <div className="row">
                {data.map((item) => (
                    <div className="col-md-4 mb-4" key={item.id}>
                        <div className="card" style={{ width: "100%" }}>
                            <img 
                                src={item.image} 
                                style={{ height: "250px", objectFit: "contain", padding: "20px" }}
                            />

                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">₹{item.price}</p>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Products

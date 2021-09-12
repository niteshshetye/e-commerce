import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)
    // console.log("Product Component", products)
    return (
        <div className='row row-cols-1 row-cols-md-3 g-4 my-2'>
        {
            products.map((product) => {
                return (
                    <div className="col" key={product.id}>
                        <div className="card h-100" style={{padding: '10px'}}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.image} className="card-img-top" alt={product.category}/>
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                            </div>
                            <div style={{display:'flex', justifyContent: "space-between"}}>
                                <h5 className="card-text">Price: ${product.price}</h5>
                                <h5 className="card-text">Rating: {product.rating.rate}</h5>
                            </div>
                            <div className="card-footer" style={{display:'flex', justifyContent: "space-between"}}>
                                <button className="btn btn-primary">Add to Cart</button>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div> 
                )
            })
        }
        </div>
    )
}

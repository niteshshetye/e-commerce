import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';

// Actions
import {setProducts} from '../../services/Actions/productActions'
// components
import ProductComponent from '../ProductComponent/ProductComponent';

export default function   ProductList() {
    // getting state as props (products came from store)
    const products = useSelector((state) => state);
    // to dispatch method
    const dispatch = useDispatch()
    console.log("Product List of state", products)

    const getProduct = async () => {
        // products came from server
        const products = await axios.get('https://fakestoreapi.com/products').catch((error) => console.log(error))
        dispatch(setProducts(products.data))
    }
    
    useEffect(() => {
        getProduct()    
    },[])

    return (
        <div className="container my-15">
            {
                products.allProducts.products.length === 0? (
                <div className='container'>
                    <h1 className='m-5'>
                        Loading....!
                    </h1>    
                </div>
                ): (
                    <div className='container'>
                        <h1>Nit - Shopping Center</h1>
                        <ProductComponent />
                    </div>
                )       
            }
        </div>
    )
}

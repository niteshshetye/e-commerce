import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'


import {removeSelectedProduct,selectedProduct} from '../../services/Actions/productActions'


export default function ProductDetail() {
    const {productId} = useParams()
    const dispatch = useDispatch()   
    // console.log(productId) 

    const product = useSelector((state) => state.selectedProduct)
    console.log('product details', product)

    const getProductDetail = async() =>{
        const productDetail = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((error) => console.log(error))
        console.log(productDetail)
        dispatch(selectedProduct(productDetail.data))
        console.log('method call getProduct details')
    }

    useEffect(()=>{
        if(productId && productId !== '') getProductDetail();
        return () => {
            dispatch(removeSelectedProduct())
        }
    },[])


    const {image, title, description, rating} = product
    return (
        <div className="container my-5">  
            {
                Object.keys(product).length === 0? (
                <div className='container'>
                    <h1 className='m-5'>
                        Loading....!
                    </h1>    
                </div>
                ): (
                    <div className="row">
                        <div className="col">
                            <div className="image">
                                <img src={image} alt={title} style={{width: '500px', height:'700px', marginLeft: '60px'}}/>
                                <div className="image-title my-3">
                                    <h5 className='center'>{title}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <h5>{description}</h5>
                        </div>
                    </div>
                )       
            }
            
        </div>
    )
        
    
}
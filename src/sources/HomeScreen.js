import React from 'react'
import './HomeScreen.css'
import products from '../data'
import ProductCart from '../components/ProductCart'
const HomeScreen = () => {
    return (
        <div className="">
            
         {
             products.map((product)=>(
                <ProductCart key={product.id} product={product}/>
             ))
         }



        </div>
    )
}

export default HomeScreen

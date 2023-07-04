import React from 'react'
import { products } from '../../products'
import { Product } from './Product'

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shop-title'>
        <h1>Sam's One Stop Shop</h1>
      </div>
      <div className="products">
        {products.map((product) => (
            <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Shop

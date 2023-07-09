import React, { useContext } from 'react';
import products from '../../products';
import { ShopContext } from '../../context/shop-context';
import './shop.css'

export const Product = (props) => {
  const { id, productName, price, image } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
      <img src={image} alt=''></img>
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartBtn' onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

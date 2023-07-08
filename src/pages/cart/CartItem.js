import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './cart.css';

export default function CartItem(props) {
  const { id, productName, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateItemCartCount } =
    useContext(ShopContext);
  return (
    <div className='cart-item'>
      <img src={image} alt='' />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
         
            value={cartItems[id]}
            onChange={(e) => updateItemCartCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}

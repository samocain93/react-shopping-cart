import React, { useContext } from 'react';
import { products } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './CartItem';
import './cart.css'

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
        <h1>My Cart Items</h1>
      </div>
      <div className='cart-items'>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;

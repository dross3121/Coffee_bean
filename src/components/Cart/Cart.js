import React from 'react'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
import { useState } from 'react'
import cartData from '../../cartData'

const Cart = () => {
    const [cart, setCart] = useState(cartData)
    return (
        <main className='cart'>
            <h2>Shopping Cart</h2>
            {cart.map(item => <CartItem item={item} key={item.id} />)}
        </main>
    )
}

export default Cart

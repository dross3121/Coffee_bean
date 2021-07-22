import React from 'react'
import './CartItem.css'

const CartItem = ({ item }) => {
    return (
        <div className='cart-item'>
            <div className="cart-item-content">
                <div className='cart-item-detail'>
                    <i className="fas fa-times"></i>
                </div>
                <div className='cart-item-detail'>
                    <img src={item.img} alt="" />
                </div>
                <div className='cart-item-detail'>
                    <p>{item.name} </p>
                </div>
                <div className='cart-item-detail'>
                    <p>{item.region}</p>
                </div>
                <div className='cart-item-detail'>
                    <div className="add">
                        <i className="fas fa-plus"></i>
                        <p>1</p>
                        <i className="fas fa-minus"></i>
                    </div>
                </div>
                <div className='cart-item-detail'>
                    <p>${item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem

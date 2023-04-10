import React from 'react'
import CartHeader from './CartHeader'
import '../../styles/EmptyCart.css'
import { useNavigate } from 'react-router-dom'
import cartLogo from '../../images/meesho-empty-cart.png'

export default function EmptyCart() {
    const navigate = useNavigate()
  return (
    <>
    <CartHeader/>
    <div className='empty-cart-container'>
        <div className='empty-cart-image'>
            <img src={cartLogo} alt='cart-logo'/>
        </div>
        <span style={{color:'black',fontSize:'18px',fontWeight:'400'}}>Your cart is empty</span>
        <div className='empty-cart-btn' onClick={()=>{navigate('/')}}>
            View Products
        </div>
    </div>
    </>
  )
}

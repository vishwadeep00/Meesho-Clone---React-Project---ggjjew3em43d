import React, { useState, useEffect, useContext } from 'react'
import Loader from '../utils/Loader/Loader'
import CartHeader from './CartHeader'
import { Context } from '../../Context'
import '../../styles/PaymentPage.css'
import { useNavigate } from 'react-router-dom'

export default function PaymentPage() {
    const navigate = useNavigate()
    const [onConfirm, setOnConfirm] = useState(false)
    const context = useContext(Context)
    const [loader,setLoader] = useState(false)
    useEffect(()=>{
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)
        },1500)
    },[onConfirm])
    const confirmHandler = ()=>{
        setOnConfirm(true)
        context.clearCart()
    }
  return (
    <>
      {
        loader?<Loader/>:
        <>
        <CartHeader/>
        <div className='payment-page-contaner'>
            <div className='payment-page-list'>
                <div className='payment-page-list-heading'>
                    <div className='payment-page-list-title'>Payment Method</div>
                </div>
                <div className='payment-page-mode'>
                   <div className='payment-page-mode-heading'>
                    PAY IN CASH
                    <div className='payment-page-mode-line'></div>
                   </div>
                   <div className='payment-page-mode-cash'>
                    <div style={{display:'flex',alignItems:'center'}}>
                        <i className="fa-solid fa-money-bills fa-2x" style={{marginRight:'10px',color:'#038d63'}}></i>
                        Cash on Delivery
                    </div>
                    <div style={{color:'#038d63'}}>
                    <i className="fa-regular fa-circle-check fa-2x"></i>
                    </div>
                   </div>
                </div>
            </div>
            <div className='payment-page-price-info'>
                <h5 className='payment-page-price-heading'>Price Details</h5>
                <div className='payment-page-total-price'>
                    <span>Total Product Price</span>
                    <span>${context.cartTotalPrice()}</span>
                </div>
                <div className='payment-page-order-total'>
                    <h5 style={{color:'black'}}>Order Total</h5>
                    <h5 style={{color:'black'}}>${context.cartTotalPrice()}</h5>
                </div>
                <div className='payment-page-continue' onClick={confirmHandler}>
                    Place Order
                </div>
            </div>
        </div>
        {
            onConfirm && 
            <>
            <div className='confetti'>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
                <div className="confetti-piece"></div>
            </div>
            <div className='payment-page-modal'>
                <div className='payment-page-confirmation'>
                    <i className="fa-regular fa-circle-check fa-2x" style={{marginBottom:'10px'}}></i>
                    Thank you for shopping with us!
                </div>
                <div className='payment-page-continue-shopping-btn' onClick={()=>{navigate('/')}}>
                    Continue Shopping
                </div>
            </div>
            </>
        }
        </>
      }
    </>
  )
}

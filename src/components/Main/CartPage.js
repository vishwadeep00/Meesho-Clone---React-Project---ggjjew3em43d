import React, { useContext } from 'react'
import CartHeader from './CartHeader'
import '../../styles/CartPage.css'
import EachCartProduct from './EachCartProduct'
import { Context } from '../../Context'
import { useNavigate } from 'react-router-dom'
import cartLogo from '../../images/cart-page-image.png'

export default function CartPage() {
  const navigate = useNavigate()
  const context = useContext(Context)
  const cartData = context.state.cart
  return (
    <>
      <CartHeader/>
      <div className='cart-page-contaner'>
        <div className='cart-page-list'>
          <div className='cart-page-list-heading'>
            <div className='cart-page-list-title'>Cart</div>
            {cartData.length} Item
          </div>
          <div className='cart-page-list-items'>
            {
              cartData.map(eachProduct => {
                return (
                  <EachCartProduct key={eachProduct.product.id} eachProduct={eachProduct}/>
                )
              })
            }
          </div>
        </div>
        <div className='cart-page-price-info'>
          <h5 className='cart-page-price-heading'>Price Details</h5>
          <div className='cart-page-total-price'>
            <span>Total Product Price</span>
            <span>${context.cartTotalPrice()}</span>
          </div>
          <div className='cart-page-order-total'>
            <h5 style={{color:'black'}}>Order Total</h5>
            <h5 style={{color:'black'}}>${context.cartTotalPrice()}</h5>
          </div>
          <div className='cart-page-disclaimer'>
            <span style={{fontSize:'12px',fontWeight:'500'}}>Clicking on 'Continue' will not deduct any money</span>
          </div>
          <div className='cart-page-continue' onClick={()=>{navigate('/address')}}>
            Continue
          </div>
          <div className='cart-page-image'>
            <img src={cartLogo} alt='cart-logo' />
          </div>
        </div>
      </div>
    </>
  )
}

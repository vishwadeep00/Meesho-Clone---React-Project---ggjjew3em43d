import React, { useContext} from 'react'
import '../../styles/EachCartProduct.css'
import { Context } from '../../Context';



export default function EachCartProduct({eachProduct}) {
  const context = useContext(Context)
  const product = eachProduct.product
  return (
    <>
      <div className='each-cart-product-container'>
        <div className='each-cart-product-image'>
          <img src={product['image']} alt='product-look' />
        </div>
        <div className='each-cart-product-detail'>
          <div className='each-cart-product-title'>{product['title']}</div>
          <div className='each-cart-product-quantity'>
            Qty:
            <div className='each-cart-product-quantity-counter'>
              <div className='quantity-decrement' onClick={() => {context.updateCount(product['id'],eachProduct.count-1)}}><i className="fa-solid fa-minus"></i></div>
              <div className='quantity-counter'>{eachProduct.count}</div>
              <div className='quantity-increment' onClick={() => {context.updateCount(product['id'],eachProduct.count+1)}}><i className="fa-solid fa-plus"></i></div>
            </div>
          </div>
          <div className='each-cart-product-price'>${product['price']}</div>
          <div className='each-cart-product-remove' onClick={()=>{context.removeCartItem(product['id'])}}><i className="fa-solid fa-x fa-2xs"></i><span style={{marginLeft:'7px',fontWeight:'500'}}>REMOVE</span></div>
        </div>
      </div>
    </>
  )
}

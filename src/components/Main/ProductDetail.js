import React, { useContext, useRef } from 'react'
import '../../styles/ProductDetail.css'
import { Context } from '../../Context'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'

export default function ProductDetail() {
  const context = useContext(Context)
  const product = context.state.detailProduct
  const goToCartRef = useRef()
  const addToCartRef = useRef()
  const navigate = useNavigate()

  const addToCartHandler = ()=>{
    context.addToCart(product['id'])
    addToCartRef.current.classList.remove('detail-product-show')
    goToCartRef.current.classList.add('detail-product-show')
  }
  const goToCartHandler = ()=>{
    navigate('/cart')
  }
  const buyNowHandler = ()=>{
    context.addToCart(product['id'])
    navigate('/cart')
  }
  return (
    <>
    <Header/>
    <div className='detail-product-container'>
      <div className='detail-product-left-container'>
        <div className='detail-product-img'>
          <img src={product['image']} alt='product-view'/>
        </div>
        <div className='detail-product-buttons'>
          <div className='detail-product-cart'>
            <div className='detail-product-cart-btn detail-product-show' ref={addToCartRef} onClick={addToCartHandler}>
              <i className="fa-solid fa-cart-shopping"></i> <span className='detail-product-cart-btn-text'><b>Add to Cart</b></span>
            </div>
            <div className='detail-product-cart-btn' ref={goToCartRef} onClick={goToCartHandler}>
              <i className="fa-solid fa-cart-shopping"></i> <span className='detail-product-cart-btn-text'><b>Go to Cart</b></span>
            </div>
          </div>
          <div className='detail-product-buy-now' onClick={buyNowHandler}>
            <i className="fa-solid fa-angles-right fa-lg"></i> <span className='detail-product-cart-btn-text'><b>Buy Now</b></span>
          </div>
        </div>
      </div>
      <div className='detail-product-right-container'>
        <div className='detail-product-info-container'>
          <div className='detail-product-title'>
              <b>{product["title"]}</b>
          </div>
          <div className='detail-product-price'>
              <span style={{fontSize:'30px',color:'black'}}><b>${product["price"]}</b></span>
          </div>
          <div className='detail-product-rating'>
              <div className='detail-product-rating-box'>
                  <span style={{color:'white'}}><b>{product['rating']['rate']}<i className="fa-solid fa-star fa-2xs"></i></b></span>
              </div>
              <span style={{fontSize:'14px'}}>{product['rating']['count']} Reviews</span>
          </div>
          <div className='detail-product-free-delivery'>
              <span style={{fontSize:'12px'}}>Free Delivery</span>
          </div>
        </div>
        <div className='detail-product-description-container'>
          <div className='detail-product-des-heading'>
            Product Details
          </div>
          <b>Category:</b> {product['category']}<br/>
          <b>Description:</b><br/> {product['description']}
        </div>
      </div>
    </div>
    <Footer/> 
    </>
  )
}

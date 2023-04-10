import React, {useContext} from 'react'
import '../../styles/EachProduct.css'
import { Context } from "../../Context";
import { useNavigate } from 'react-router-dom';

export default function EachProduct({product}) {
    const context = useContext(Context)
    const navigate = useNavigate()
    
    const setDetailProduct = ()=>{
        context.setDetailProduct(product['id'])
        navigate('/detail')
    }
  return (
    <>
    <div className='each-product' onClick={setDetailProduct}>
        <div className='each-product-img'>
            <img src={product["image"]} alt='product-view' />
        </div>
        <div className='each-product-title'>
            {product["title"]}
        </div>
        <div className='each-product-price'>
            <span style={{fontSize:'22px',color:'black'}}><b>${product["price"]}</b></span>
            <span style={{padding:'3px',color:'#929292',fontSize:'12px'}}><b>onwards</b></span>
        </div>
        <div className='each-product-free-delivery'>
            <span style={{fontSize:'12px'}}>Free Delivery</span>
        </div>
        <div className='each-product-rating'>
            <div className='each-product-rating-box'>
                <span style={{color:'white'}}><b>{product['rating']['rate']}<i className="fa-solid fa-star fa-2xs"></i></b></span>
            </div>
            <span style={{fontSize:'14px'}}>{product['rating']['count']} Reviews</span>
        </div>
    </div>
    </>
  )
}

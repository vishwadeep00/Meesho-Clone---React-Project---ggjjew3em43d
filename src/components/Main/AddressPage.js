import React, { useContext, useEffect, useState } from 'react'
import Loader from '../utils/Loader/Loader.js'
import CartHeader from './CartHeader'
import '../../styles/AddressPage.css'
import { Context } from '../../Context.js'
import AddressForm from '../utils/AddressForm/AddressForm.js'
import EachAddress from './EachAddress.js'

export default function AddressPage() {
    const context = useContext(Context)
    let addressData = context.state.address
    const [loader, setLoader] = useState(false)
    const [openModal, setOpenModal] = useState(1100)
    const [shadow, setShadow] = useState('none')
    useEffect(()=>{
        setLoader(true)
        setTimeout(()=>{
            setLoader(false)
        },1500)
    },[])
    const modalHandler = ()=>{
        if(openModal === 1100){
            setOpenModal(0)
            setShadow('block')
        }
        else{
            setOpenModal(1100)
            setShadow('none')
        }
    }
  return (
    <>
        {loader?
            <Loader/>:
            <div>
                <CartHeader/>
                <div className='address-page-contaner'>
                    <div className='address-page-list'>
                    <div className='address-page-list-heading'>
                        <div className='address-page-list-title'>
                            <span>Select Delivery Address</span>
                            <span className='address-page-add-new' onClick={modalHandler}><i className="fa-solid fa-plus fa-2xs"></i> ADD NEW ADDRESS</span>
                        </div>
                    </div>
                    <div className='address-page-list-items'>
                        <ul>
                        {
                            addressData.map((eachData,index)=>{
                                return(
                                    
                                    <EachAddress key={index} data={eachData}/>
                                    
                                )
                            })
                        }
                        </ul>
                    </div>
                    </div>
                    <div className='address-page-price-info'>
                        <h5 className='address-page-price-heading'>Price Details</h5>
                        <div className='address-page-total-price'>
                            <span>Total Product Price</span>
                            <span>${context.cartTotalPrice()}</span>
                        </div>
                        <div className='address-page-order-total'>
                            <h5 style={{color:'black'}}>Order Total</h5>
                            <h5 style={{color:'black'}}>${context.cartTotalPrice()}</h5>
                        </div>
                    </div>
                </div>
                <div  className='address-page-shadow' style={{display:`${shadow}`}} onClick={modalHandler}></div>
                <div className='address-page-modal' style={{transform:`translateX(${openModal}px)`}}>
                    <div className='address-modal-heading'>
                        <span style={{fontWeight:'500'}}>ADD ADDRESS</span>
                        <span style={{cursor:'pointer'}} onClick={modalHandler}><i className="fa-solid fa-x fa-lg"></i></span>
                    </div>
                    <AddressForm modalHandler={modalHandler}/>
                </div>
            </div>
        }
    </>
  )
}

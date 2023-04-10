import React from 'react'
import '../../styles/EachAddress.css'
import { useNavigate } from 'react-router-dom'

export default function EachAddress({data}) {
    const navigate = useNavigate()
  return (
    <>
    <li className='each-address-li'>
        <input type={'radio'} value={data.name} name='address' id={data.name}/>
        <label className='each-address-label' htmlFor={data.name}>
            <div className='each-address-div'>
                <div className='each-address-name'>
                    {data.name}
                    <div className='each-address-radio-btn'><div className='each-address-radio-btn-inside'></div></div>
                </div>
                <div className='each-address-address'>
                    <span>{data.addressLine1}, {data.addressLine2}, {data.city},<br/> {data.state} - {data.pincode}<br/>+91 {data.contact}</span>
                </div>
                <div className='each-address-continue-btn' onClick={()=>{navigate('/payment')}}>
                    Deliver to this Address
                </div>
            </div>
        </label>
    </li>
    </>
  )
}

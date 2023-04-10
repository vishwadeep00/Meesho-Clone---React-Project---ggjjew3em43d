import React, { useContext, useState } from 'react'
import './AddressForm.scss'
import { Context } from '../../../Context'

const initialFormState = {
    name:'',
    contact:'',
    addressLine1:'',
    addressLine2:'',
    pincode:'',
    city:'',
    state:''
}
export default function AddressForm({modalHandler}) {
    const context = useContext(Context) 
    const [formData, setFormData] = useState(initialFormState)
    const formSubmitHandler = (e)=>{
        e.preventDefault()
        modalHandler()
        context.addAddress(formData)
        setFormData(initialFormState)
    }
    const onFormUpdate = (e)=>{
        setFormData({...formData,[e.target.name] : e.target.value})
    }
  return (
    <div className='address-form-container'>
        <div className='address-form-contact-details'>
            <span style={{color:'#f43397'}}><i className="fa-solid fa-phone fa-lg"></i></span>
            <span style={{marginLeft:'10px', fontWeight:'500', fontSize:'20px'}}>Contact Details</span>
        </div>
        <form onSubmit={formSubmitHandler}>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="Name" name="name" value={formData.name} onChange={onFormUpdate} id='address-form-name' required />
                <label htmlFor="address-form-name" className="form__label">Name</label>
            </div>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="Phone Number" name="contact" value={formData.contact} onChange={onFormUpdate} id='address-form-contact' required />
                <label htmlFor="address-form-contact" className="form__label">Phone Number</label>
            </div>
            <div className='address-form-address-details'>
                <span style={{color:'#f43397'}}><i className="fa-solid fa-location-dot fa-lg"></i></span>
                <span style={{marginLeft:'10px', fontWeight:'500', fontSize:'20px'}}>Address</span>
            </div>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="House no./ Building Name" name="addressLine1" value={formData.addressLine1} onChange={onFormUpdate} id='address-form-line1' required />
                <label htmlFor="address-form-line1" className="form__label">House no./ Building Name</label>
            </div>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="Road Name/ Area/ Colony" name="addressLine2" value={formData.addressLine2} onChange={onFormUpdate} id='address-form-line2' required />
                <label htmlFor="address-form-line2" className="form__label">Road Name/ Area/ Colony</label>
            </div>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="Pincode" name="pincode" value={formData.pincode} onChange={onFormUpdate} id='address-form-pincode' required />
                <label htmlFor="address-form-pincode" className="form__label">Pincode</label>
            </div>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="City" name="city" value={formData.city} onChange={onFormUpdate} id='address-form-city' required />
                <label htmlFor="address-form-city" className="form__label">City</label>
            </div>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="State" name="state" value={formData.state} onChange={onFormUpdate} id='address-form-state' required />
                <label htmlFor="address-form-state" className="form__label">State</label>
            </div>
            <div className='address-form-button'>
                Save Address & Continue
                <button type='submit' className='address-form-btn-tag'></button>
            </div>
        </form>
    </div>
  )
}

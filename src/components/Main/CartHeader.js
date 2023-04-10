import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../Context'
import '../../styles/CartHeader.css'
import logo from '../../images/meesho.png'

export default function CartHeader() {
  const context = useContext(Context)
  const navigate = useNavigate()
  const homeDataHandler = ()=>{
    context.resetData()
    navigate('/')
  }
  return (
    <>
        <div className='cart-header'>
          <div className="cart-logo-container" onClick={homeDataHandler}>
              <img src={logo} alt='logo' />
          </div>
        </div>
    </>
  )
}

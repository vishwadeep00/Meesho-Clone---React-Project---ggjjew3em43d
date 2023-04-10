import React, { useContext, useState } from 'react'
import '../../styles/Login.scss'
import CartHeader from './CartHeader'
import { Context } from '../../Context'
import { useNavigate } from 'react-router-dom'
import loginLogo from '../../images/meesho-login-image.png'

export default function Login() {
  const context = useContext(Context)
  const navigate = useNavigate()
  const [state,setState] = useState({
    email:'',
    password:''
  })
  const onChange = (e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const loginHandler = ()=>{
    if(state.email === 'admin' && state.password === 'admin'){
      context.setLogin(true)
      localStorage.setItem('login',JSON.stringify(true))
      navigate('/')
    }
    else{
      alert('Wrong Credentials')
    }
  }
  return (
    <>
      <CartHeader/>
      <div className='login-page-container'>
        <div className='login-page-signin'>
          <div className='login-page-image'>
            <img src={loginLogo} alt='login-logo' />
          </div>
          <div className='login-page-data'>
            <span style={{fontSize:'20px',fontWeight:'500',color:'black'}}>Sign In to view your profile</span>
            <div className="form__group">
                <input type="input" className="form__field" placeholder="Email" name="email" value={state.email} onChange={onChange} id='login-email' required />
                <label htmlFor="login-email" className="form__label">Email</label>
            </div>
            <div className="form__group">
                <input type="password" className="form__field" placeholder="Password" name="password" value={state.password} onChange={onChange} id='login-password' required />
                <label htmlFor="login-password" className="form__label">Password</label>
            </div>
            <div className='login-btn' onClick={loginHandler}>
              Log In
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

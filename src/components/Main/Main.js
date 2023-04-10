import React from 'react'
import '../../styles/Main.css'
import { Routes, Route } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import CartPage from './CartPage'
import Login from './Login'
import AddressPage from './AddressPage'
import PaymentPage from './PaymentPage'
import EmptyCart from './EmptyCart'
import EmptySearch from './EmptySearch'
import CartChecker from '../utils/CartChecker'
import SearchChecker from '../utils/SearchChecker'
import LoginChecker from '../utils/LoginChecker'

export default function Main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SearchChecker><ProductList/></SearchChecker>}/>
        <Route path='/detail' element={<ProductDetail/>}/>
        <Route path='/cart' element={<LoginChecker><CartChecker><CartPage/></CartChecker></LoginChecker>}/>
        <Route path='/address' element={<AddressPage/>}/>
        <Route path='/payment' element={<PaymentPage/>}/>
        <Route path='/empty-cart' element={<EmptyCart/>}/>
        <Route path='/empty-search' element={<EmptySearch/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>  
    </>
  )
}

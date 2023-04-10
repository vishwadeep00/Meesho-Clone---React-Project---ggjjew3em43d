import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../../Context'

export default function CartChecker(props) {
  const context = useContext(Context)
  if(context.state.cart.length === 0){
    return <Navigate to={'/empty-cart'}/>
  }
  return props.children
}

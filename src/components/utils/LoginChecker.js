import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../../Context'

export default function LoginChecker(props) {
    const context = useContext(Context)
    if(context.state.isLoggedIn === false){
        return <Navigate to={'/login'}/>
    }
  return props.children
}

import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { Context } from '../../Context'

export default function SearchChecker(props) {
  const context = useContext(Context)
  if(context.noSearchResult){
    return <Navigate to={'/empty-search'}/>
  }
  return props.children
}

import React from 'react'
import '../../styles/EmptySearch.css'
import Header from '../Header/Header'
import searchLogo from '../../images/meesho-no-results.svg'

export default function EmptySearch() {
  return (
    <>
      <Header/>
      <div className='empty-search-container'>
        <div className='empty-search-image'>
            <img src={searchLogo} alt='search-logo' />
        </div>
        <h4 style={{marginTop:'15px',color:'black'}}>No matching products found.</h4>
        <span style={{marginTop:'10px',fontWeight:'400'}}>Try searching for something else.</span>
      </div>
    </>
  )
}

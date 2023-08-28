import React, { useEffect } from 'react'
import './App.css';
import Main from './components/Main/Main';

const App = () => {

  useEffect(()=>{
    if(!localStorage.getItem('search-history')){
      localStorage.setItem('search-history','[]')
    }
    let x = [
      {
        addressLine1: "Achhawar",
        addressLine2: "Gyanpur",
        city: "Bhadohi",
        contact: "7317662062",
        name: "Vishwadeep Maurya ",
        pincode: "221304",
        state: " Uttar Pradesh",
      },
    ];
    if(!localStorage.getItem('addresses')){
        localStorage.setItem("addresses", JSON.stringify(x));
    }
  },[])
  return (
    <>
    <Main/>
    </>
  )
}


export default App;

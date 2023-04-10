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
        addressLine1: "H-12",
        addressLine2: "Madhav Nagar",
        city: "Gwalior",
        contact: "7389123012",
        name: "Bhartendra Singh Chauhan",
        pincode: "474002",
        state: "Madhya Pradesh",
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

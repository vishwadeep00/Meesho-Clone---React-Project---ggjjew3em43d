import React, { createContext, useEffect, useState } from "react";

//Guidelines for handling api data

// 1.please try to use async and await function

// 2.please use exception handling try and catch block.

// 3.please update all data inside the state .

// 4.please use loader to the user till data comes.

// 5.please handler error scenario properly.

// 6.always write helpers function for filter and mapping of data.

const Context = createContext();
let initialData = [];
let detailProduct = JSON.parse(localStorage.getItem("detail-product")) || {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
      "rate": 3.9,
      "count": 120
  }
};
let initialState = {
  data: [],
  detailProduct: detailProduct,
  cart: JSON.parse(localStorage.getItem("cart-items")) || [],
  address: JSON.parse(localStorage.getItem("addresses")) || [],
  isLoggedIn: JSON.parse(localStorage.getItem("login")) || false,
};
const ContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  const [page, setPage] = useState("1");
  const [noSearchResult,setNoSearchResult] = useState(false)
  useEffect(() => {
    fetchData();
  },[page]);
  const fetchData = async () => {
    const api = await fetch(
      `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${page}`
    );
    const data = await api.json();
    initialData = data;
    setState({ ...state, data: data });
  };
  const setLogin = (boolean)=>{
    setState({...state,isLoggedIn:boolean})
  }
  const selectPage = (pageNo) => {
    setPage(pageNo);
  };
  const resetData = () => {
    setState({ ...state, data: initialData });
    setNoSearchResult(false)
  };
  const searchData = (searchString) => {
    const searchedData = initialData.filter((each) => {
      let title = each["title"].toLowerCase();
      let des = each["description"].toLowerCase();
      if (title.includes(searchString) || des.includes(searchString)) {
        return true;
      }
      return false;
    });
    if(searchedData.length === 0){
        setNoSearchResult(true)
    }
    else{
        setNoSearchResult(false)
    }
    setState({ ...state, data: searchedData });
  };
  const selectFilterOption = (option) => {
    switch (option) {
      case "Relevance": {
        let data = state.data.sort((a, b) => {
          if (a["id"] > b["id"]) {
            return 1;
          }
          if (a["id"] < b["id"]) {
            return -1;
          }
          return 0;
        });
        setState({ ...state, data: data });
        break;
      }
      case "Price (High to Low)": {
        let data = state.data.sort((a, b) => {
          if (a["price"] > b["price"]) {
            return -1;
          }
          if (a["price"] < b["price"]) {
            return 1;
          }
          return 0;
        });
        setState({ ...state, data: data });
        break;
      }
      case "Price (Low to High)": {
        let data = state.data.sort((a, b) => {
          if (a["price"] > b["price"]) {
            return 1;
          }
          if (a["price"] < b["price"]) {
            return -1;
          }
          return 0;
        });
        setState({ ...state, data: data });
        break;
      }
      case "Ratings": {
        let data = state.data.sort((a, b) => {
          if (a["rating"]["rate"] > b["rating"]["rate"]) {
            return -1;
          }
          if (a["rating"]["rate"] < b["rating"]["rate"]) {
            return 1;
          }
          return 0;
        });
        setState({ ...state, data: data });
        break;
      }
      default:{
        return
      }
    }
  };
  const setDetailProduct = (id) => {
    let product = state.data.filter((product) => id === product["id"]);
    localStorage.setItem("detail-product", JSON.stringify(product[0]));
    setState({ ...state, detailProduct: product[0] });
  };
  const addToCart = (id) => {
    console.log(id)
    let cart = state.cart;
    if(cart.length){
      for (let eachCartProduct of cart) {
        if (eachCartProduct.product["id"] === id) {
          eachCartProduct.count += 1;
          setState({ ...state, cart: cart });
          localStorage.setItem("cart-items", JSON.stringify(cart));
          return;
        }
      }
    }
    let product = initialData.filter((product) => id === product["id"]);
    let newProduct = {
      count: 1,
      product: product[0],
    };
    cart.push(newProduct);
    setState({ ...state, cart: cart });
    localStorage.setItem("cart-items", JSON.stringify(cart));
  };

  const clearCart = () => {
    setState({ ...state, cart: [] });
    localStorage.setItem("cart-items", JSON.stringify([]));
  };

  const updateCount = (id, newCount) => {
    if (newCount >= 1) {
      let newCart = state.cart.map((product) => {
        if (id === product.product["id"]) {
          product.count = newCount;
        }
        return product;
      });
      setState({ ...state, cart: newCart });
      localStorage.setItem("cart-items", JSON.stringify(newCart));
    }
  };
  const removeCartItem = (id) => {
    let newCart = state.cart.filter((product) => product.product["id"] !== id);
    setState({ ...state, cart: newCart });
    localStorage.setItem("cart-items", JSON.stringify(newCart));
  };
  const cartTotalPrice = () => {
    let total = state.cart.reduce((acc, curr) => {
      acc += curr.count * curr.product["price"];
      return acc;
    }, 0);
    return total.toFixed(2);
  };
  const addAddress = (data) => {
    let addressArray = state.address;
    addressArray.push(data);
    setState({ ...state, address: addressArray });
    localStorage.setItem("addresses", JSON.stringify(addressArray));
  };
  return (
    <Context.Provider
      value={{
        state: state,
        searchData,
        selectFilterOption,
        selectPage,
        setDetailProduct,
        addToCart,
        updateCount,
        removeCartItem,
        cartTotalPrice,
        addAddress,
        clearCart,
        resetData,
        setLogin,
        noSearchResult:noSearchResult,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };

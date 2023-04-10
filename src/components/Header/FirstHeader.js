import React, { useRef, useState, useContext} from "react";
import { Context } from "../../Context";
import "../../styles/FirstHeader.css";
import { useNavigate } from "react-router-dom";
import meeshoLogo from '../../images/meesho.png'
import searchIcon from '../../images/search_icon.png'
import cancelIcon from '../../images/cancel_icon.png'
import historyIcon from '../../images/search_history_icon.png'
import downloadIcon from '../../images/googleplay_image.png'
import appStoreIcon from '../../images/app-store-image.jpg'

const popular_searches = [
  "saree",
  "smartwatch",
  "kurti",
  "tshirt",
  "watch",
  "shoes",
  "lehenga",
  "top",
  "jeans",
];

export default function FirstHeader() {
  const navigate = useNavigate()
  const context = useContext(Context)
  const cancelRef = useRef();
  const [searchVal, setSearchVal] = useState("");
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("search-history")) || []
  );
  const searchChangeHandler = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value) {
      cancelRef.current.style.display = "block";
    } else {
      cancelRef.current.style.display = "none";
    }
  };
  const checkDataHandler = (e) => {
    if (searchVal && e.key === "Enter") {
      setSearchHistory([...searchHistory, searchVal]);
      const data = JSON.parse(localStorage.getItem("search-history"));
      data.push(searchVal);
      localStorage.setItem("search-history", JSON.stringify(data));
      context.searchData(searchVal)
      e.target.blur()
      navigate('/')
    }
  };
  const handleHistorySearch = (e)=>{
    let string = e.target.name
    context.searchData(string)
    e.target.blur()
    navigate('/')
  }
  const handlePopularSearch = (e)=>{
    let string = e.target.name
    context.searchData(string)
    e.target.blur()
    navigate('/')
  } 
  const homeDataHandler = ()=>{
    context.resetData()
    navigate('/')
  }
  const logoutHandler = ()=>{
    context.setLogin(false)
    localStorage.setItem('login',JSON.stringify(false))
  }
  return (
    <div className="header">
      <div className="left-header">
        <div className="logo-container" onClick={homeDataHandler}>
          <img src={meeshoLogo} alt="logo"/>
        </div>
        <div className="search-input-container">
          <div className="search-icon">
            <img src={searchIcon} alt="search"/>
          </div>
          <input
            type={"text"}
            className="input-bar"
            value={searchVal}
            onKeyDown={checkDataHandler}
            onChange={searchChangeHandler}
            placeholder="Try Saree, Kurti or Search by Product Code"
          />
          <div className="cancel-icon">
            <img
              ref={cancelRef}
              onClick={() => {
                setSearchVal("")
                cancelRef.current.style.display = 'none'
              }}
              style={{ display: "none" }}
              src={cancelIcon} alt='cancel'
            />
          </div>
          <div className="search-modal">
            {searchHistory.length > 0 ? (
              <>
                <h5>Recent Searches</h5>
                {searchHistory.map((eachSearch, index) => {
                  return (
                    <div className="search-history" key={index} >
                      <button className="search-history-btn" name={eachSearch} onClick={handleHistorySearch}></button>
                      <div className="search-history-icon">
                        <img src={historyIcon} alt='history' />
                      </div>
                      <div className="search-history-name">
                        <p>{eachSearch}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
            <h5>Popular Searches</h5>
            <div className="popular-searches">
              {popular_searches.map((eachSearch, index) => {
                return (
                  <div className="each-popular-search" key={index}>
                    <button className="search-popular-btn" name={eachSearch} onClick={handlePopularSearch}></button>
                    <p>{eachSearch}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="right-header">
        <div className="download-container">
          <div className="download">
            <div className="download-icon">
              <i className="fa-solid fa-mobile-screen-button fa-lg"></i>
            </div>
            <div className="download-text">
              <p>Download App</p>
            </div>
          </div>
          <div className="download-options-display">
            <p>
              <b>Download From a</b>
            </p>
            <div className="playstore-img">
              <img src={downloadIcon} alt={'download'} />
            </div>
            <div className="appstore-img">
              <img src={appStoreIcon} alt='app-store' />
            </div>
          </div>
        </div>
        <div className="supplier-container">
          <p>Become a Supplier</p>
        </div>
        <div className="profile-cart-container">
          <div className="profile">
            <div className="profile-detail">
              <div className="profile-icon">
                <i className="fa-regular fa-user fa-lg"></i>
              </div>
              <p>Profile</p>
            </div>
            <div className="profile-menu">
              {
                context.state.isLoggedIn?
                <>
                <div className="header-profile">
                  <i className="fa-regular fa-user fa-2x"></i>
                  <span style={{marginLeft:'20px',fontSize:'20px',fontWeight:'500'}}>Admin</span>
                </div>
                <div className="my-orders">
                  <div className="order-icon">
                    <i className="fa-solid fa-bag-shopping fa-lg"></i>
                  </div>
                  <p>My Orders</p>
                </div>
                <div className="my-orders" onClick={logoutHandler}>
                  <div className="order-icon">
                  <i className="fa-solid fa-arrow-right-from-bracket fa-lg"></i>
                  </div>
                  <p>Logout</p>
                </div>
                </>:
                <>
                <h5 style={{marginTop:'15px'}}>Hello User</h5>
                <p style={{marginTop:'5px'}}>To access your meesho account</p>
                <div className="signin-btn" onClick={()=>{navigate('/login')}}>
                  <p>
                    <b>Sign In</b>
                  </p>
                </div>
                <div className="my-orders">
                  <div className="order-icon">
                    <i className="fa-solid fa-bag-shopping fa-lg"></i>
                  </div>
                  <p>My Orders</p>
                </div>
                </>
              }
            </div>
          </div>
          <div className="cart" onClick={()=>{navigate('/cart')}}>
            <div className="cart-icon">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </div>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

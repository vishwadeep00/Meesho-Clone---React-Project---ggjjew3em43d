import { useState, useContext } from "react";
import React from "react";
import '../../styles/Filter.css'
import filterData from "../../data/FilterData";
import { Context } from "../../Context";

export default function Filter() {
    const context = useContext(Context)
  const [sortType, setSortType] = useState("Relevance");
  const [caret,setCaret] = useState('down')
  const [optionDisplay, setOptionDisplay] = useState('none')
  const handleSort = () => {
    if(caret === 'down'){
        setCaret('up')
        setOptionDisplay('block')
    }
    else{
        setCaret('down')
        setOptionDisplay('none')
    }
  }
  const handleFilterOption = (e)=>{
    setCaret('down')
    setOptionDisplay('none')
    let option = e.target.name
    setSortType(option)
    context.selectFilterOption(option)
  }
  return (
    <>
        <div className="product-list-filter">
            <div className="filter-sort">
                <div className="filter-details" onClick={handleSort}>
                    <div style={{ margin: "7px 15px" }}>
                        <span className="sort-by">Sort by : </span>
                        <span className="sort-type">
                            <b>{sortType}</b>
                        </span>
                    </div>
                    <div style={{ margin: "7px 10px" }}>
                        <i className={`fa-solid fa-caret-${caret}`}></i>
                    </div>
                </div>
                <div className="filter-options" style={{display:`${optionDisplay}`}}>
                    <div className="filter-each-option">
                    Relevance
                        <button className="filter-each-option-btn" name={'Relevance'} onClick={handleFilterOption}></button>
                    </div>
                    <div className="filter-each-option">
                    Price (High to Low)
                        <button className="filter-each-option-btn" name={'Price (High to Low)'} onClick={handleFilterOption}></button>
                    </div>
                    <div className="filter-each-option">
                    Price (Low to High)
                        <button className="filter-each-option-btn" name={'Price (Low to High)'} onClick={handleFilterOption}></button>
                    </div>
                    <div className="filter-each-option">
                    Ratings
                        <button className="filter-each-option-btn" name={'Ratings'} onClick={handleFilterOption}></button>
                    </div>
                </div>
            </div>
            <div className="more-filter-options">
                <div className="more-filter-options-heading">
                    <span><b>FILTERS</b></span><br/>
                    <span style={{fontSize:'12px'}}>1000+ Products</span>
                </div>
                {filterData.map((each,index)=>{
                    return (
                        <div key={index} className="more-filter-options-data">
                            <span><b>{each}</b></span>
                            <i className={`fa-solid fa-caret-down`}></i>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  );
}

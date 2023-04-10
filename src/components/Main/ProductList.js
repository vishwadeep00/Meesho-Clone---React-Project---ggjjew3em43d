import React, { useContext } from "react";
import "../../styles/ProductList.css";
import Filter from "./Filter";
import { Context } from "../../Context";
import EachProduct from "./EachProduct";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ProductList() {
    let context = useContext(Context)
    let data = context.state.data
  return (
    <>
    <Header/>
    <div className="product-list-page">
      <div className="product-list-heading">
        <h2>
          Products For You
        </h2>
      </div>
      <div className="product-list-content">
        <Filter/>
        <div className="product-list">
            {
                data.map((eachProduct)=>{
                    return (
                        <EachProduct key={eachProduct['id']} product={eachProduct}/>
                    )
                })
            }
        </div>
      </div>
      <div className="pagination-container">
        <div className="pagination">
          <div className="page">
            <button className="page-btn" name="1" onClick={(e)=>{context.selectPage(e.target.name)}}></button>1</div>
          <div className="page"><button className="page-btn" name="2" onClick={(e)=>{context.selectPage(e.target.name)}}></button>2</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

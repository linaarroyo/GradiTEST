import React, { useState } from "react";
import '../styles/productInfo.css';
import ProductDetails from "./ProductDetails.js";
import ProductOptions from "./ProductOptions.js";

const ProductInfo = (props) => {
    const {productJSON} = props;
    return (
        <div className="col-50">
            <div className="envoltura envolturaInfo" id="productInfo" style={{paddingLeft:"8vw"}}>
                <ProductDetails productJSON = {productJSON}/>
                <ProductOptions productJSON = {productJSON}/>
            </div>
        </div>
    );
}

export default ProductInfo;